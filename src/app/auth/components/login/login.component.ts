import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducer';
import { LoginRequestInterface } from '../../types/loginRequestInterface.interface';
import { loginActions } from '../../store/action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  data$ = combineLatest({
    isSubmiting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  })
  constructor(private store:Store,
              private fb:FormBuilder) { }
  formLogin = this.fb.nonNullable.group({
      email : ['',Validators.required,Validators.email],
      password : ['',Validators.required]
  });

  signIn(){
    console.log(this.formLogin.getRawValue());
    const request : LoginRequestInterface = this.formLogin.getRawValue();
    this.store.dispatch(loginActions.login({request}));
  }

  getFirstError(errors: any): string {
    const firstKey = Object.keys(errors)[0];
    return errors[firstKey];
  }
}
