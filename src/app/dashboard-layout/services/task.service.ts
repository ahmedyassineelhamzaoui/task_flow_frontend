import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskResponseInterface } from '../types/task-response.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<TaskResponseInterface[]> {
    return this.http.get<TaskResponseInterface[]>(environment.apiURL + '/tasks');
  }
  
}
