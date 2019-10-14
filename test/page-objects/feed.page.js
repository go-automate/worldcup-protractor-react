var FeedPage = function(){

  this.globalFeedLink = element(by.cssContainingText('a.nav-link','Global Feed'));
  this.article = (articleName) => {
    element.all(by.cssContainingText('h1',articleName));
  }
  this.allArticles = $('h1');
  this.deleteButton = $('button.btn.btn-outline-danger.btn-sm');
}
module.exports = new FeedPage();