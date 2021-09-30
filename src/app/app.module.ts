import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// forms module added for using ngModel

import { AppRoutingModule } from './app-routing.module '; //add this
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageReactiveFormComponent } from './login-page-reactive-form/login-page-reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Day5Component } from './day5/day5.component';
import { PintrestLoginPageComponent } from './pintrest-login-page/pintrest-login-page.component';
import { PintrestRegisterationPageComponent } from './pintrest-registeration-page/pintrest-registeration-page.component';
import { PintrestTodoListPageComponent } from './pintrest-todo-list-page/pintrest-todo-list-page.component';



@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day2Component,
    Day3Component,
    Day4Component,
    LoginPageComponent,
    RegisterPageComponent,
    LoginPageReactiveFormComponent,

    TodoListComponent,
     Day5Component,
     PintrestLoginPageComponent,
     PintrestRegisterationPageComponent,
     PintrestTodoListPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, // added inorder to use forms module
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
