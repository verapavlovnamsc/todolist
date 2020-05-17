import { ToDoItem } from "./todoitem";

export class ToDolist{
    Title: string;
    ToDoItems: Array<ToDoItem>;
    ClosedToDoItems: Array<ToDoItem>;
    constructor(toDoListTitleName: string){
      this.Title = toDoListTitleName;
      this.ToDoItems = new Array<ToDoItem>();
      this.ClosedToDoItems = new Array<ToDoItem>();
    }
  
    addToDoItem(nameItem: ToDoItem){
      this.ToDoItems.push(nameItem);
    }
  
    deleteToDoItem(nameItem: ToDoItem){
      const index = this.ToDoItems.indexOf(nameItem);
      if (index != -1){
        this.ToDoItems.splice(index, 1);
      }
    }
  
    moveToDoItemToClosed(nameItem: ToDoItem){
      this.ClosedToDoItems.push(nameItem);
    }
  }