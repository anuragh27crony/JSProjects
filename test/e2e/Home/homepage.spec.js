var homePage=require('./home.pageObject.js')

describe("Functionality for ToDo", function(){
  beforeEach(function(){
    browser.get("https://angularjs.org");
  });

  afterEach(function() {
    browser.manage().logs().get('browser').then(function(browserLog) {
      expect(browserLog.length).toEqual(0);
      // Uncomment to actually see the log.
      // console.log('log: ' + require('util').inspect(browserLog, {colors: true}));
    });
  });


  it("Add a todo Item",function(){
    homePage.todoList.sendKeys("It's always fun");
    homePage.addTodoItem.click();
    // browser.pause();
    expect(homePage.todoElements.count()).toEqual(3);

    console.error("Printing is fun here");
    console.error(homePage.todoElements.get(0).getText());
    // for( var x in homePage.todoElements){
    //   console.log(homePage.todoElements.get(0).getText());
      // console.log(x.getgetText());
    // }

    browser.pause();

  });

});
