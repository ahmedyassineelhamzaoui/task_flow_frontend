export interface TaskResponseInterface {
      id: string;
      title: string;
      description: string;
      status: string;
      startDate: Date;
      endDate: Date;
      tags: Tag[];
      createdBy: User;
      assignedTo: User;
}