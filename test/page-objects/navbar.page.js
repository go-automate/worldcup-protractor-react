var NavbarPage = function(){

  this.usernameLink = $('a[href="/@safestudent"]');
  this.newPostLink = $('a[href="/editor"]');
  this.homeLink = $('a[href="/"]');

}
module.exports = new NavbarPage();