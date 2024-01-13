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
export function tasksReducer(state: TaskStateInterface = initialState, action: Ac   tion){
    switch(action.type){
        // get all tasks
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
        // search tasks
        case '[Task] Search Tasks':
            return {
                ...state,
                dataSate: TaskStateEnum.LOADING
            }
        case '[Task] Search Tasks success':
            return {
                ...state,
                tasks: (<TasksActions>action).payload,
                dataSate: TaskStateEnum.SUCCESS
            }
        case '[Task] Search Tasks failure':
            return {
                ...state,
                errorMessage: (<TasksActions>action).payload,
                dataSate: TaskStateEnum.ERROR
            }
        default:
            return {...state}
    }
}