import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit, OnDestroy {
  todoList: Observable<Todo[]>
  mount: any
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.mount = this.store.select('todo').subscribe(data => {
      this.todoList = data
      console.log(this.todoList)
    }) 
  }

  ngOnDestroy () {
    this.mount.unsubscribe()
  }

}
