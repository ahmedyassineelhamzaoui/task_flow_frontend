import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { TaskStateEnum, TaskStateInterface } from '../../store/reducer';
import { GetAllTasksAction } from '../../store/action';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  taskState$: Observable<TaskStateInterface>;
  readonly taskStateEnum = TaskStateEnum;
  constructor(private store: Store<any>) {
    this.taskState$ = this.store.select('mytaskState');
  }
  
  ngOnInit(): void {
    this.store.dispatch(new GetAllTasksAction({})); 
  }
}
