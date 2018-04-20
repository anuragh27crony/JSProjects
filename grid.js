describe('HealthSensePOCGRID',function(){
  beforeEach(function(){
    browser.get('https://angularjs.org');
  });


  it('should add a todo',function(){
    element(by.model('todoList.todoText')).sendKeys("Funthing to add");
    element(by.css('[value="add"]')).click();

    var todoElements=element.all(by.repeater('todo in todoList.todos'));
    expect(todoElements.count()).toEqual(3);
    expect(todoElements.get(2).getText()).toEqual('Funthing to add');
  });


  it('should add a todo',function(){
    var new_todo_item="Not a Fun thing to add";
    element(by.model('todoList.todoText')).sendKeys(new_todo_item);
    element(by.css('[value="add"]')).click();

    var todoElements=element.all(by.repeater('todo in todoList.todos'));
    expect(todoElements.count()).toEqual(3);
    expect(todoElements.get(2).getText()).toEqual(new_todo_item);
  });


});
