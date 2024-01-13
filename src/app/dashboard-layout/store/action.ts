import { Action } from "@ngrx/store";
import { TaskResponseInterface } from "../types/task-response.interface";
import { TaskStateInterface } from "./reducer";

// get all tasks actions
export class GetAllTasksAction implements Action {
   type = '[Task] Get All Tasks';
   constructor(public payload: any) { }
}
export class GetAllTasksSuccessAction implements Action {
    type = '[Task] Get All Tasks success';
    constructor(public payload: TaskStateInterface[]) { }
}
export class GetAllTasksFailureAction implements Action {
    type = '[Task] Get All Tasks failure';
    constructor(public payload: string) { }
}

// search actions
export class SearchTasksAction implements Action {
    type = '[Task] Search Tasks';
    constructor(public payload: any) { }
}
export class SearchTasksSuccessAction implements Action {
    type = '[Task] Search Tasks success';
    constructor(public payload: TaskStateInterface[]) { }
}
export class SearchTasksFailureAction implements Action {
    type = '[Task] Search Tasks failure';
    constructor(public payload: string) { }
}

export type TasksActions = GetAllTasksAction | GetAllTasksSuccessAction | GetAllTasksFailureAction|
                           SearchTasksAction | SearchTasksSuccessAction | SearchTasksFailureAction;