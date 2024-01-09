import { createAction, createActionGroup, props } from "@ngrx/store";
import { BackendErrorInterface } from "../../auth/shared/types/backendError.interface";
import { TaskResponseInterface } from "../types/task-response.interface";


export const loadTasks = createAction('[Tasks] load tasks');

export const loadTasksSuccess = createAction(
    '[Task] load Tasks success',
    props<{tasks:TaskResponseInterface[]}>()
);

export const loadTasksFailure = createAction(
    '[Task] load Tasks failure',
    props<{error : BackendErrorInterface}>()
);