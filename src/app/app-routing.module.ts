import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './todo/create-todo/create-todo.component';
import { ProfileComponent } from './account/profile/profile.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard', 
    component: TodolistComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create',
    component: CreateTodoComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
