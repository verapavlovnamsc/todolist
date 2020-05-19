import { Component, OnInit, Input } from '@angular/core';
import { ToDolist } from '../share/todolist';
import { ToDoItem } from '../share/todoitem';
import { toDoItemStatus } from '../share/todoitemstatus';

@Component({
  selector: 'app-nb',
  templateUrl: './nb.component.html',
  styleUrls: ['./nb.component.css']
})
export class NbComponent implements OnInit {
  todolist: ToDolist;
  selectedItem: ToDoItem;
  @Input() toDoListTitle: string;
   ngOnInit(): void {
    this.todolist = new ToDolist(this.toDoListTitle);
    this.todolist.addToDoItem(new ToDoItem("delo 1"));
    this.todolist.addToDoItem(new ToDoItem("delo 2"));
    this.todolist.addToDoItem(new ToDoItem("delo 3"));
  }

  constructor(){
    this.selectedItem = new ToDoItem("");
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

  changeDelo(todoitem: ToDoItem){
    console.log(todoitem.id);
    this.selectedItem = todoitem;
  }
  update(text: string){
    this.selectedItem.title = text;
  }


}

