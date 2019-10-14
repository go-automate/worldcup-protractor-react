var LoginPage = function(){

  this.emailField = $('input[placeholder="Email"]');
  this.passwordField = $('input[placeholder="Password"]');
  this.loginButton = $('button[type="submit"]')


}

module.exports = new LoginPage();

