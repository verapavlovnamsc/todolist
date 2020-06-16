import { Component, OnInit } from '@angular/core';
import { ToDolist } from '../share/todolist';
import { ToDoItem } from '../share/todoitem';

@Component({
  selector: 'app-inputfilter',
  templateUrl: './inputfilter.component.html',
  styleUrls: ['./inputfilter.component.css']
})
export class InputfilterComponent {
  list: Array<string>;  // создаем переменную list
  filteredlist: Array<string>;  // создаем переменную filteredlist
  constructor() {
    this.filteredlist = new Array<string>();
    this.list = new Array<string>();
    this.list.push('мама');
    this.list.push('папа');  // заполняем list значениями
    this.list.push('мамапапа');
    this.list.push('папамама');
    this.list.push('брат');
    this.fillfilteredlist(this.list);  // вызываем метод fillfilteredlist с параметром this.list
   
   }

   filterlist(inputdelo: string){
    if (inputdelo.length>0){  // если мы вводим какое-то значение
      this.fillfilteredlist(this.list.filter(x=>x.includes(inputdelo)));
    } // фильтруем 
    else{
      this.fillfilteredlist(this.list);// вызываем метод fillfilteredlist с параметром this.list
    }
   }

   fillfilteredlist(strokelist: Array<string>){
     console.log(strokelist);
     this.filteredlist= new Array<string>();  // создаем список fillfilteredlist
     for (let delo of strokelist){
      this.filteredlist.push(delo);
     }
   }   


   
  


  // addToDoItem(nameItem: ToDoItem){
    // this.ToDoItems.push(nameItem);
  // }

 

  
}

