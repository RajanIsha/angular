import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  dataArray : Array<Message>;
  errorMsg : String;
  inputData : String;
  constructor() {
    this.dataArray = [];
    this.errorMsg = '';
    this.inputData = '';
   }

  ngOnInit() {
  }
 
  
  addToDataArray(value) {
   if(value.length > 0) {
    let data = new Message(value, (this.dataArray.length + 1));
    this.dataArray.push(data);
    this.errorMsg = '';
    this.inputData  = '';
   } else {
     this.errorMsg = "String should not be EMPTY";
   }      
  }

  removeMessage(removeData) {
    let index = this.dataArray.indexOf(removeData);
    this.dataArray.splice(index,1);
  }

}

export class Message {
  message: string;
  id: number;

  constructor(message,id){
      this.message = message;
      this.id = id;
  }
}