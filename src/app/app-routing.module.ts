import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';


const routes: Routes = [
    { path:  '', redirectTo:  'home', pathMatch:  'full' },
    {
        path:  '',
        component:  AppComponent
    },
    {
        path:  'home',
        component:  HomeComponent
    },
    {
        path:  'about',
        component:  AboutComponent
    },
    {
        path: 'todos',
        component: TodosComponent
    },
    {
        path: 'stopwatch',
        component: StopwatchComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }