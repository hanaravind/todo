import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodolistComponent } from './todolist/todolist.component'
import { AppRoutingModule } from '../app-routing.module';
import { ProfileService } from '../account/profile.service';



@NgModule({
  declarations: [DashboardComponent, CreateTodoComponent, TodolistComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[DashboardComponent],
  providers: [ProfileService]
})
export class TodoModule { }
