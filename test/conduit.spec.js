const { browser, ExpectedConditions } = require("protractor");

// CHANGE EVERYTHING TO GO AUTOMATE

// Not sure it's really checking the Global Feed. Need to debug this.

// safestudent
// test@safebear.co.uk
// safebear
// 1. Sign in
// 2. Create new post
// 3. Find new post in list
// 4. Delete new post

const homePage = require("./page-objects/home.page")
const loginPage = require("./page-objects/login.page")
const navbarPage = require("./page-objects/navbar.page")
const feedPage = require("./page-objects/feed.page")
const editorPage = require("./page-objects/editor.page")

describe('React Conduit App', function() {
  it('should be able to create a new post', function() {

    browser.waitForAngularEnabled(false);
    browser.get('');

    homePage.signInButton.click();
    
    expect(browser.getCurrentUrl()).toContain('login');

    loginPage.emailField.sendKeys("test@safebear.co.uk");
    loginPage.passwordField.sendKeys("safebear");
    loginPage.loginButton.click();

    browser.wait(ExpectedConditions.not(ExpectedConditions.urlContains('login')));
    expect(navbarPage.usernameLink.isPresent()).toBeTruthy();

    // Click on create post
    navbarPage.newPostLink.click()

    browser.wait(ExpectedConditions.urlContains('editor'));

    // Create post
    editorPage.titleField.sendKeys("Go Automate");
    editorPage.descriptionField.sendKeys("Test Automation");
    editorPage.articleField.sendKeys("# Test Automation");
    editorPage.submitButton.click();

    // Click on home link
    navbarPage.homeLink.click();

    browser.wait(ExpectedConditions.not(ExpectedConditions.urlContains('editor')));

    // Click on global feed
    feedPage.globalFeedLink.click();

    browser.wait(ExpectedConditions.visibilityOf(feedPage.allArticles));

    // Click on post
    feedPage.article("Go Automate");

    // Wait for page to change
    browser.wait(ExpectedConditions.urlContains('article'));

    // Delete post
    feedPage.deleteButton.click();

    browser.wait(ExpectedConditions.not(ExpectedConditions.urlContains('article')));

    // Click on global feed
    feedPage.globalFeedLink.click();

    browser.wait(ExpectedConditions.visibilityOf(feedPage.allArticles));

    // Check the element no longer exists
    expect(navbarPage.usernameLink.isPresent()).toBeTruthy();


  });
});