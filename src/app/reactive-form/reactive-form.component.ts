import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  register = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]+$'), Validators.maxLength(10)]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]*'), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+$')])
  })

  submit() {
    console.log(this.register.value);
  }

  reset() {
    this.register.reset();
  }


}
