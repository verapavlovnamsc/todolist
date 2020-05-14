import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit{
  todolist: ToDolist;
  selectedItem: ToDoItem;
  @Input() toDoListTitle: string;
  constructor() {
   }

  ngOnInit(): void {
    this.todolist = new ToDolist(this.toDoListTitle);
    this.todolist.addToDoItem(new ToDoItem("delo 1"));
    this.todolist.addToDoItem(new ToDoItem("delo 2"));
    this.todolist.addToDoItem(new ToDoItem("delo 3"));
  }

  selectItem(todoitem: ToDoItem){
    this.selectedItem = todoitem;
  }

  getChangedText(text: string){
    this.selectedItem.title = text;
  } 
  changedDelo(delo: ToDoItem){
    delo.title = "gbhjbjn";
  }

  addDelo(nameDelo: string){
    this.todolist.addToDoItem(new ToDoItem(nameDelo));
  }
  deleteDelo(todoitem: ToDoItem){
    this.todolist.deleteToDoItem(todoitem);
    todoitem.status = toDoItemStatus.deleted;
    this.todolist.moveToDoItemToClosed(todoitem);
  }
  sdelanoDelo(todoitem: ToDoItem){
    this.todolist.deleteToDoItem(todoitem);
    todoitem.status = toDoItemStatus.done;
    this.todolist.moveToDoItemToClosed(todoitem);      
  }
  getColor(delo: ToDoItem):string{
    if (delo.status === toDoItemStatus.inprogress){
      return "green";
    }
    if (delo.status === toDoItemStatus.done){
      return "blue";
    }
    if (delo.status === toDoItemStatus.deleted){
      return "red";
    }
 }
 getStyle(delo: ToDoItem): any{
   return {
     "background-color": this.getColor(delo),
     "font-weight":"bold"
   };
 }
}
enum toDoItemStatus{
  done = 1,
  deleted = 2,
  inprogress = 3
}

class ToDoItem {
  status: toDoItemStatus;
  id: string;
  title: string;
  constructor(title: string){
    this.id = Math.random().toString(36).substr(2, 9);
    this.title = title;
    this.status = toDoItemStatus.inprogress;
  }
}

class ToDolist{
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