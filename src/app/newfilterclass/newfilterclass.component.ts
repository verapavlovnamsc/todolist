import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newfilterclass',
  templateUrl: './newfilterclass.component.html',
  styleUrls: ['./newfilterclass.component.css']
})
export class NewfilterclassComponent {

  items: Array<OneItemToFilter>;

  constructor() {
    this.items = new Array<OneItemToFilter>();
    this.populateItems();
  }

  populateItems() {
    for (let index = 0; index < 10; index++) {
      const newItem = new OneItemToFilter();
      newItem.isVisible = true;
      newItem.name = `someName ${index}`;
      this.items.push(newItem);
    }
  }

  applyFilter(filterValue: string) {
    for (let index = 0; index < this.items.length; index++) {
      this.items[index].isVisible = false;
      if (this.items[index].name.indexOf(filterValue) > 1) {
        this.items[index].isVisible = true;
      }
    }
  }
}

class OneItemToFilter {
  name: string;
  isVisible: boolean;
}
