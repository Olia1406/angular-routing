import {ITask} from 'src/app/shared/interfaces/task.interface';

export class Task implements ITask{
    constructor(
       public id:number,
       public taskName: string,
       public checker: boolean
    ){}
}