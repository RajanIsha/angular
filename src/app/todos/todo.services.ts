import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable()
export class TodoService {
    constructor(
        private http : HttpClient
   ) { }

   domain : string = "https://isha-todos-api.herokuapp.com/todos";

   getAllTodos() : Observable<any> {
       return this.http.get( this.domain + "/list");
   }

   addTodo(body) : Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post(this.domain + "/add-todo", body, { headers : headers });
    }
    updateTodo(body) : Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post(this.domain + "/edit-todo", body, { headers : headers });
    }
   

    deleteTodo(id) : Observable<any> {
        return this.http.get(this.domain + "/delete-todo/" + id);
    }
}