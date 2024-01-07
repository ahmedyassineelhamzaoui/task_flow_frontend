import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from './store/action';
import { RegisterRequestInterface } from './types/registerRequest.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  
  constructor(private fb: FormBuilder,private store:Store) { }
  form= this.fb.nonNullable.group({
    firstName: ['',Validators.required,Validators.minLength(2)],
    lastName: ['',Validators.required,Validators.minLength(2)],
    email: ['',Validators.required,Validators.email],
    password: ['',Validators.required,Validators.minLength(8)],
    confirmPassword: ['',Validators.required,Validators.minLength(8)]
  });
  onSubmit(){
    console.log(this.form.getRawValue());
    const request : RegisterRequestInterface = this.form.getRawValue();
    this.store.dispatch(register({request}));
  }
}
