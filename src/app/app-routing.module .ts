import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day1Component } from './day1/day1.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PintrestLoginPageComponent } from './pintrest-login-page/pintrest-login-page.component';
import { PintrestRegisterationPageComponent } from './pintrest-registeration-page/pintrest-registeration-page.component';
import { PintrestTodoListPageComponent } from './pintrest-todo-list-page/pintrest-todo-list-page.component';



const routes : Routes = [
  {path: '', component: PintrestRegisterationPageComponent},
  
  {path: 'register-page', component: RegisterPageComponent},
  {path: 'login-page', component: LoginPageComponent, children: [
    {
      path: 'registration-success-page',component: Day1Component
    }
  ]},
  {path: 'todo-list-page', component: TodoListComponent},
  {path: 'pintrest-login-page', component: PintrestLoginPageComponent},
  {path: 'pintrest-todo-list-page', component: PintrestTodoListPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
