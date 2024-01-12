import { Action } from "@ngrx/store";
import { TaskResponseInterface } from "../types/task-response.interface";
import { TasksActions } from "./action";

export enum TaskStateEnum{
    LOADING = 'Loading',
    SUCCESS = 'Success',
    ERROR = 'Error',
    INTILALE = 'Initial'
}
export interface TaskStateInterface {
    tasks: TaskResponseInterface[] ,
    errorMessage : string,
    dataSate: TaskStateEnum
}

const initialState: TaskStateInterface = {
    tasks: [],
    errorMessage: '',
    dataSate: TaskStateEnum.INTILALE
}
export function tasksReducer(state: TaskStateInterface = initialState, action: Action){
    switch(action.type){
        case '[Task] Get All Tasks':
            return {
                ...state,
                dataSate: TaskStateEnum.LOADING
            }
        case '[Task] Get All Tasks success':
            return {
                ...state,
                tasks: (<TasksActions>action).payload,
                dataSate: TaskStateEnum.SUCCESS
            }
        case '[Task] Get All Tasks failure':
            return {
                ...state,
                errorMessage: (<TasksActions>action).payload,
                dataSate: TaskStateEnum.ERROR
            }
        default:
            return {...state}
    }
}