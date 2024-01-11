import { Action, createAction, createActionGroup, props } from "@ngrx/store";
import { BackendErrorInterface } from "../../auth/shared/types/backendError.interface";
import { TaskResponseInterface } from "../types/task-response.interface";

export class GetAllTasksAction implements Action {
   type = '[Task] Get All Tasks';
   constructor(public payload: any) { }
}
export class GetAllTasksSuccessAction implements Action {
    type = '[Task] Get All Tasks success';
    constructor(public payload: TaskResponseInterface[]) { }
}
export class GetAllTasksFailureAction implements Action {
    type = '[Task] Get All Tasks failure';
    constructor(public payload: string) { }
}
export type TasksActions = GetAllTasksAction | GetAllTasksSuccessAction | GetAllTasksFailureAction;