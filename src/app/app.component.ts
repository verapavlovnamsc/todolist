import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  spiski: Array<string>;
  people: Array<Person>;
  
  constructor(){ 
    this.spiski = new Array<string>();
    this.people = new Array<Person>();
    for(var i=0; i < 100; i++){
      this.people.push(new Person(`name${i}`,i));
    }
   

    this.spiski.push("spisok 1");
    this.spiski.push("spiski 2");
    this.spiski.push("spisok 3");
  }
  add(){
    this.spiski.push("spisok 4");
  }
}

class Person {
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  name: string;
  age: number;
}