import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-tercer-desafio',
  templateUrl: './tercer-desafio.component.html',
  styleUrls: ['./tercer-desafio.component.css']
})
export class TercerDesafioComponent {
  firstNameControl = new FormControl('', [Validators.minLength(4)]);

  lastNameControl = new FormControl('')

  emailControl = new FormControl ('', [Validators.email])

  passwordControl = new FormControl ('', [Validators.maxLength(10)])

  repeatPasswordControl = new FormControl ('', [Validators.maxLength(10)])

  edadControl = new FormControl ('')


  registrerForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    password: this.passwordControl,
    repeatPassword: this.repeatPasswordControl,
    edad: this.edadControl, 

  },{
    validators:[
      this.passwordsMatchValidator
    ]
  }
  )

  
  passwordsMatchValidator(){
    return () => {
    if (this.passwordControl.value !== this.repeatPasswordControl.value){
      return {
        passwordsMatch: true
      }
    }
    return null
  }
}

   onSubmit(){
    console.log (this.registrerForm.value)

   }



}
