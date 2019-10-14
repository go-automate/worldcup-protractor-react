var EditorPage = function(){

  this.titleField = $('input[placeholder="Article Title"]');
  this.descriptionField = $('input[placeholder="What\'s this article about?"]')
  this.articleField = $('textarea[rows="8"]')
  this.submitButton = $('button.btn.btn-lg.pull-xs-right.btn-primary')

}
module.exports = new EditorPage();