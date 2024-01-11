import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { TaskStateInterface } from '../../store/reducer';
import { GetAllTasksAction } from '../../store/action';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  taskState$: Observable<TaskStateInterface>;

  constructor(private store: Store<{ taskState: TaskStateInterface }>) {
    this.taskState$ = this.store.select('taskState');
  }
  
  ngOnInit(): void {
    console.log("yes1")
    this.store.dispatch(new GetAllTasksAction({}));
    console.log("yes2")
  }
}
