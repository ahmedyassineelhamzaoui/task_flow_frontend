import { TagResponseInterface } from "./tag-response.interface";
import { UserResponseInterface } from "./user-response.interface";

export interface TaskResponseInterface {
      id: string;
      title: string;
      description: string;
      status: string;
      startDate: Date;
      endDate: Date;
      tags: TagResponseInterface[];
      createdBy: UserResponseInterface;
      assignedTo: UserResponseInterface;
}