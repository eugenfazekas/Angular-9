import { Component } from '@angular/core';
import { TodoList } from './todo-list';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  private list = new TodoList("Bob",[
      new TodoItem("Go for run", true),
      new TodoItem("Get flowers"),
      new TodoItem("Collect tickets"),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
    //return this.items.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    let array = this.list.items.filter(item => this.showComplete || !item.complete);
    console.log(array);
    return array;
  }

  addItem(newItem){
    if(newItem != ""){
      this.list.addItem(newItem);
    }
  }

  showComplete: boolean = false;

}
