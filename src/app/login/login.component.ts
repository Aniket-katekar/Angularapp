import { Component } from '@angular/core';
import { CalService } from '../service/cal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    num1:any;
    num2:any;
    operation='+';
    result:any;
    constructor(calculat:CalService){
      this.result = calculat.cal(this.num1,this.num2,this.operation);
    }
}
