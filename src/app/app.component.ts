import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  // fname:string="Sanket";
  // img:string="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
  // colSpan:number=2;

  // displayName(){
  //   alert("My name is Sanket");
  // }
  mark:number=0.5;

  employee:any[]=[
    {
      fname:"Aniket",
      lname:"Katekar",
      age:22,
      address:"Koparkhairane",
      post:"Web developer",
      email:"Aniket@gmail.com"
    },
    {
      fname:"Rohit",
      lname:"Patil",
      age:25,
      address:"Vashi",
      post:"Software developer",
      email:"Rohit@gmail.com"
    }
  ]
  choose:string="B";
  lastname:string="Katekar";
  amount:number=5.9;
  // displayDate(){
  //   let date = new Date()
  //   alert(`Today's Date : ${date.getDate()}/${date.getDate()}/${date.getFullYear()}`);
  // }
}
