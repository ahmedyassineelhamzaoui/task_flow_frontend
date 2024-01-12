import { TaskResponseInterface } from "./task-response.interface";

export interface ResponseWithDetailsInterface {
    timestamp: string;
      message: string;
      status: string;
      details: {
            tasks: TaskResponseInterface[]
      };
}