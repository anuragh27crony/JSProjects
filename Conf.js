exports.config={
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  capabilities: {'browserName':'firefox'},
  specs:['./test/e2e/Home/homepage.spec.js'],
  jasmineNodeOpts:{
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true
  }
};
