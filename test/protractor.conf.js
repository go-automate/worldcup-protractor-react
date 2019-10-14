var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  baseUrl: 'http://localhost:4100/',
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
  
    // chromeOptions: {
    //    args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    //  }
  },

      // run a group of tests
      // specs: ['specs/*.spec.js'],
      // suites: {
      //      speed: 'specs/speed-test.spec.js',
      //      reliability: 'specs/reliability-test.spec.js'
      // },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*.spec.js'],

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      takeScreenshots: true,
      takeScreenshotsOnlyOnFailures: true,
      cleanDestination: false
   }));
}
}