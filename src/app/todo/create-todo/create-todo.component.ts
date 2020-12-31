import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { ProfileService } from 'src/app/account/profile.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as TutorialActions from '../../store/todo.actions';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit, OnDestroy {
  getUser: any = {}
  userLog: any
  errorMsg: string = ''
  constructor(private route: Router, private profile: ProfileService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userLog = this.profile.getName().subscribe(data => {
      this.getUser = data
     })
  }

  addTodo(name) {
    if (name.trim() !== '') {
      this.store.dispatch(new TutorialActions.AddTodo({name: name, timestamp: Date.now(), user: this.getUser.profile }) )
      this.route.navigateByUrl('/dashboard')
    } else {
      this.errorMsg = 'Your task should not be empty'
    }
  }


  ngOnDestroy () {
    this.userLog.unsubscribe()
  }

}
