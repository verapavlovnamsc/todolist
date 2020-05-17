import { toDoItemStatus } from "./todoitemstatus";

export class ToDoItem {
    status: toDoItemStatus;
    id: string;
    title: string;
    constructor(title: string){
      this.id = Math.random().toString(36).substr(2, 9);
      this.title = title;
      this.status = toDoItemStatus.inprogress;
    }
  }