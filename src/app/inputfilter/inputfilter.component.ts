import { Component, OnInit } from '@angular/core';
import { ToDolist } from '../share/todolist';
import { ToDoItem } from '../share/todoitem';

@Component({
  selector: 'app-inputfilter',
  templateUrl: './inputfilter.component.html',
  styleUrls: ['./inputfilter.component.css']
})
export class InputfilterComponent {
  list: Array<string>;
  filteredlist: Array<string>;
  constructor() {
    this.filteredlist = new Array<string>();
    this.list = new Array<string>();
    this.list.push('hbjhjb');
    this.list.push('bhjb');
    this.list.push('bhjbjjb');
    this.list.push('bhhjbkjlmjb');
    this.list.push('b456t7y8u9ib');
    for (var delo of this.filteredlist);
    // заполнить переменныу фильтеред лист данными из листа 
   
   }
   filterlist(inputdelo: string){
    this.filteredlist=this.list.filter(x=>x===inputdelo);

   }

   

  
}

