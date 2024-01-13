import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { TaskStateEnum, TaskStateInterface } from '../../store/reducer';
import { GetAllTasksAction, SearchTasksAction } from '../../store/action';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  taskState$: Observable<TaskStateInterface>;
  readonly taskStateEnum = TaskStateEnum;
  dropdownOpen: { [index: number]: boolean } = {};
  constructor(private store: Store<any>,
    private addTaskDialog: MatDialog) {
    this.taskState$ = this.store.select('mytaskState');
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.store.dispatch(new GetAllTasksAction({}));
  }
  addTassk() {
    const dialogRef = this.addTaskDialog.open(AddTaskComponent);
    // dialogRef.afterClosed().subscribe(() => {
    //   this.competitions = [];
    //   this.getAllCompetitions();
    // });
  }
  searchTasks(dataForm: any) {
    this.store.dispatch(new SearchTasksAction(dataForm.search));
  }
}
