var HomePage=function(){
  this.todoList = element(by.model("todoList.todoText"));
  this.addTodoItem = element(by.css("[value=add]"));
  this.todoElements = element.all(by.repeater("todo in todoList.todos"))
};

module.exports=new HomePage();
