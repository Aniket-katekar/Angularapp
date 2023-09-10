import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-static-form',
  templateUrl: './static-form.component.html',
  styleUrls: ['./static-form.component.css']
})
export class StaticFormComponent {

  showData(data:NgForm){
    console.log(data.value);
  }

  resetData(data: NgForm){
    data.reset();
  }
  updateData(data:NgForm){
    let user={
      username:"Aniket",
      password:"Andy123"
    }
    data.setValue(user);
  }
  updateFormData(data:NgForm){
    let user ={
      firstname:"Aniket",
      lastname:"Katekar",
      email:"aniketkatekar46916@gmail.com",
      password:"Aniket123",
      dob:"2001-12-3"
    }
    data.setValue(user);
  }
}
