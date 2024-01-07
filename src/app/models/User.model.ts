import { Role } from './Role.model';

export interface User {
    id : string;
    firstName : string;
    lastName : string;
    email : string;
    username : string;
    authorities : Role[];
}