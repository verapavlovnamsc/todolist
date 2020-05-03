import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {
  todolist: ToDolist;
  selectedItem: ToDoItem;
  constructor() {
    this.todolist = new ToDolist("vashnoe");
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

  addDelo(nameDelo: string){
    this.todolist.addToDoItem(new ToDoItem(nameDelo));
  }

  deleteDelo(todoitem: ToDoItem){
    this.todolist.deleteToDoItem(todoitem);
  }
}

class ToDoItem {
  id: string;
  title: string;
  constructor(title: string){
    this.id = Math.random().toString(36).substr(2, 9);
    this.title = title;
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
      this.ClosedToDoItems.push(nameItem);
      console.log(this.ClosedToDoItems);
    }
  }

}