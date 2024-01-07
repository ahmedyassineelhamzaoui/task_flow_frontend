import { Tag } from './Tag.model';
import { User } from './User.model';

export interface Task {
    id : string;
    title : string;
    description : string;
    status :string;
    startDate: Date;
    endDate : Date;
    tags : Tag[];
    createdBy: User;
    assignedTo: User;
}