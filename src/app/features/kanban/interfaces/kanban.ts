export interface IUser {
    firstName: string;
    lastName: string;
    email?: string;
}

export interface ITask {
    id: string;
    title: string;
    type: string;
    identifier: string;
    dueDate: string;
    totalComments: number;
    owner: IUser;
    assignee?: IUser;
    epicName: string;
    priority: string;
}

export interface IKanbanColumnBlock {
    id: string,
    name: string,
    tasks: Array<ITask>
}