import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTasks, loadTasksSuccess, loadTasksFailure } from './action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TaskService } from '../services/task.service';

@Injectable()
export class TaskEffects{
    constructor(
        private actions$: Actions,
        private taskService:TaskService
    ){}

    loadTasks$ = createEffect(() => this.actions$.pipe(
        ofType(loadTasks),
        mergeMap(() => this.taskService.getAllTasks()
        .pipe(
            map(tasks => loadTasksSuccess({ tasks})),
            catchError(error => of(loadTasksFailure({ error })))
        ))
    ));
}