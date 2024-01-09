import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from './types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from './shared/types/currentUser.interface';
import { AuthResponseInterface } from './types/authResponse.interface';
import { environment } from '../../environments/environment.development';
import { LoginRequestInterface } from './types/loginRequestInterface.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface>{
    return this
            .http
            .post<CurrentUserInterface>(environment.apiUrlAuth+'signup',data);
  }
  login(data: LoginRequestInterface): Observable<CurrentUserInterface>{
    return this
            .http
            .post<CurrentUserInterface>(environment.apiUrlAuth+'signin',data);
  }

}
