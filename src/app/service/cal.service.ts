import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class CalService{

  cal(num1:number,num2:number,operation:string){
    if(operation=='+'){
      return this.add(num1,num2);
    }
    else if(operation=='-'){
      return this.sub(num1,num2);
    }
    else if(operation=='*'){
      return this.mult(num1,num2);
    }
    else if(operation=='/'){
      return this.div(num1,num2);
    }
    else{
      return this.invalidNumber();
    }
  }

  add(num1:number,num2:number){
    return "Addition is "+(num1+num2);
  }

  sub(num1:number,num2:number){
    return "Subtraction is "+(num1-num2);
  }

  mult(num1:number,num2:number){
    return "Multiplication is "+(num1*num2);
  }

  div(num1:number,num2:number){
    return "Division is "+(num1/num2);
  }
  invalidNumber(){
    return "Inavlid number";
  }
}
