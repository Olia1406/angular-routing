import {IUser} from 'src/app/shared/interfaces/user.inerface';

export class User implements IUser{
   constructor(public id: number,
    public login:string,
    public password:string,
    public email: string
   ) {}

}