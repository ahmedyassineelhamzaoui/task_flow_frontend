import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { AuthStateInterface } from '../../types/authState.interface';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducer';
import { authActions } from '../../store/action';
import { AuthService } from '../../auth.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form= this.fb.nonNullable.group({
    firstName: ['',Validators.required,Validators.minLength(2)],
    lastName: ['',Validators.required,Validators.minLength(2)],
    email: ['',Validators.required,Validators.email],
    password: ['',Validators.required,Validators.minLength(8)],
    confirmPassword: ['',Validators.required,Validators.minLength(8)]
  });
  
  data$ = combineLatest({
    isSubmiting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  })
  constructor(
    private fb: FormBuilder,
    private store: Store) { }
  
  onSubmit(){
    console.log(this.form.getRawValue());
    const request : RegisterRequestInterface = this.form.getRawValue();
    this.store.dispatch(authActions.register({request}));
  }
  getFirstError(errors: any): string {
    const firstKey = Object.keys(errors)[0];
    return errors[firstKey];
  }
}
