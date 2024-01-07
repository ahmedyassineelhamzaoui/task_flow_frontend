import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { RegisterRequestInterface } from './types/registerRequest.interface';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from './shared/types/currentUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface>{
    
  }
}
