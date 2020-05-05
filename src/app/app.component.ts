import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  spiski: Array<string>;
  constructor(){ 
    this.spiski = new Array<string>();
    this.spiski.push("spisok 1");
    this.spiski.push("spiski 2");
    this.spiski.push("spisok 3");
  }
  add(){
    this.spiski.push("spisok 4");
  }
}
