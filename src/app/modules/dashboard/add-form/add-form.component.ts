import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { __asyncDelegator } from 'tslib';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  constructor( private fb:FormBuilder) { }
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
LoginForm!:FormGroup
value:string[]|undefined
  // matcher = new MyErrorStateMatcher();
  ngOnInit(){
  this.LoginForm = new FormGroup({

      name: new FormControl(null,[Validators.required,Validators.maxLength(30)]),
      lastName: new FormControl(null, [Validators.required,Validators.maxLength(30),Validators.minLength(6)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      phone: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      // textera: new FormControl(null,[Validators.required,Validators.minLength(200)]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(12)])

    })



  }

submite(){
  console.log(this.LoginForm);
  console.log(this.LoginForm.valid);
if(this.LoginForm.valid){
  console.log(this.LoginForm.value);
}
  }






}


