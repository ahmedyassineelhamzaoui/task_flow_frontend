import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from './types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from './shared/types/currentUser.interface';
import { envirponment } from '../../environments/environment';
import { AuthResponseInterface } from './types/authResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface>{
    return this
            .http
            .post<AuthResponseInterface>(envirponment.apiURL+'',data)
            .pipe(map((response) => response.user));
  }
}
