import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from '../share/todoitem';
import { ToDolist } from '../share/todolist';
import { toDoItemStatus } from '../share/todoitemstatus';

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
    this.todolist.addToDoItem(new ToDoItem("delo 1", "description 1"));
    this.todolist.addToDoItem(new ToDoItem("delo 2", "description 2"));
    this.todolist.addToDoItem(new ToDoItem("delo 3", "description 3"));
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
    this.todolist.addToDoItem(new ToDoItem(nameDelo, ""));
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
     "font-weight":"bold",
     "background-size": "200px 100px"
   };
 }
}
