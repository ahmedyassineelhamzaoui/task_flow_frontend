import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskResponseInterface } from '../types/task-response.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { PersistanceService } from '../../auth/shared/services/persistance.service';
import { ResponseWithDetailsInterface } from '../types/response-with-details.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient,
    private persistanceService: PersistanceService) {}

    getAllTasks(): Observable<ResponseWithDetailsInterface> {
      const token = this.persistanceService.get('accessToken');      
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<any>(environment.apiURL + 'tasks', { headers });
    }

    searchTasks(search: string): Observable<ResponseWithDetailsInterface> {
      const token = this.persistanceService.get('accessToken');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<any>(environment.apiURL + 'searchedTasks?searchName=' + search, { headers });
    }
  
}
