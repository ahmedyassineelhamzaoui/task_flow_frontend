import { createReducer, on } from "@ngrx/store";
import { loadTasksFailure, loadTasksSuccess } from "./action";
import { TaskResponseInterface } from "../types/task-response.interface";

export const initialState: ReadonlyArray<TaskResponseInterface> = [];

export const taskReducer = createReducer(
    initialState,
    on(loadTasksSuccess,(state,{tasks}) => tasks),
    on(loadTasksFailure,state=> state)
);