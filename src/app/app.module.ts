import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from  './app-routing.module';


import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todos/todo.services';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
