import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from './types/registerRequest.interface';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from './shared/types/currentUser.interface';
import { envirponment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface>{
    return this.http.post<CurrentUserInterface>(envirponment.apiURL+'',data);
  }
}
