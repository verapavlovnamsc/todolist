import { toDoItemStatus } from "./todoitemstatus";

export class ToDoItem {
    status: toDoItemStatus;
    id: string;
    title: string;
    description: string;
    constructor(title: string, description: string){
      this.id = Math.random().toString(36).substr(2, 9);
      this.title = title;
      this.description = description;
      this.status = toDoItemStatus.inprogress;
    }
  }