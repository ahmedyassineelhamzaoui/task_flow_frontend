import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from './types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from './shared/types/currentUser.interface';
import { environment } from '../../environments/environment.development';
import { LoginRequestInterface } from './types/loginRequestInterface.interface';
import { PersistanceService } from './shared/services/persistance.service';
import * as jwt from 'jsonwebtoken';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   
   private readonly validationUrl = environment.apiUrlAuth + 'validate-token';

  constructor(private http:HttpClient, private persistanceService: PersistanceService) { }
  token = this.persistanceService.get('accessToken');

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

  isTokenValid(): Observable<boolean> {
    return this.http.post<boolean>(this.validationUrl, { token: this.token });
  }
  setToken(token: string): void {
    this.token = token;
  }
}
