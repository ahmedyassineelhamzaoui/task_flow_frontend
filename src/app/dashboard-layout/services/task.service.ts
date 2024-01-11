import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskResponseInterface } from '../types/task-response.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { PersistanceService } from '../../auth/shared/services/persistance.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient,
    private persistanceService: PersistanceService) {}

    getAllTasks(): Observable<TaskResponseInterface[]> {
      const token = this.persistanceService.get('accessToken');

      console.log(token);
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.get<TaskResponseInterface[]>(environment.apiURL + 'tasks', { headers });
    }
  
}
