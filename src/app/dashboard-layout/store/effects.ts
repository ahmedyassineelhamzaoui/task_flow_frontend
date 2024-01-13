import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TaskService } from '../services/task.service';
import { TaskStateInterface } from './reducer';
import { TasksActions } from './action';

@Injectable()
export class TasksEffects{
    constructor(
        private actions$: Actions,
        private taskService:TaskService
    ){}

    // get all tasks effect
    getAllTasksEffect=createEffect(()=>this.actions$.pipe(
        ofType('[Task] Get All Tasks'),
        mergeMap((action)=>this.taskService.getAllTasks().pipe(
            map((response)=>{
                console.table(response.details.tasks);
                return {type:'[Task] Get All Tasks success',payload:response.details.tasks}
            }),
            catchError((error)=>{
                return of({type:'[Task] Get All Tasks failure',payload:error})
            })
            
        ))
    ))
    // search tasks effect
    searchTasksEffect=createEffect(()=>this.actions$.pipe(
        ofType('[Task] Search Tasks'),
        mergeMap((action:TasksActions)=>this.taskService.searchTasks(action.payload).pipe(
            map((response)=>{
                return {type:'[Task] Search Tasks success',payload:response.details.tasks}
            }),
            catchError((error)=>{
                return of({type:'[Task] Search Tasks failure',payload:error})
            })
            
        ))
    ))

   
}