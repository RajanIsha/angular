import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  dataArray : Array<Message>;
  errorMsg : String;
  isErrorMessageClosed : boolean;
  enableCheckMsg : String;
  constructor() {
    this.dataArray = [];
    this.errorMsg = '';
    this.isErrorMessageClosed = false;
    this.enableCheckMsg = '';
   }

  ngOnInit() {
  }
 
  
  addToDataArray(value) {
   if(value.length > 0) {
    let data = new Message(value, (this.dataArray.length + 1), false, false);
    this.dataArray.push(data);
    this.errorMsg = '';
    this.enableCheckMsg = '';
   } else {
     this.errorMsg = "String should not be EMPTY";
     this.isErrorMessageClosed = true;
   } 
     
  }

  removeMessage(removeData) {
    let index = this.dataArray.indexOf(removeData);
    this.dataArray.splice(index,1);
  }

  enableEdit(data) {
    if(data.isChecked == true) {
      data.isEdit = true;
      this.enableCheckMsg = '';
    }     
  }

  updateData(id, value) {
    for(let i=0; i<this.dataArray.length; i++) {
      if(this.dataArray[i].id == id) {
        this.dataArray[i].message = value;
        this.dataArray[i].isEdit = false;
        this.dataArray[i].isChecked = false;
      }
    }
    
  }

  closeErrorMessage() {
    this.errorMsg = '';
    this.isErrorMessageClosed = false;

  }

}

export class Message {
  message: string;
  id: number;
  isEdit: boolean;
  isChecked: boolean;

  constructor(message,id, isEdit, isChecked){
      this.message = message;
      this.id = id;
      this.isEdit = isEdit;
      this.isChecked = isChecked;
  }
}

