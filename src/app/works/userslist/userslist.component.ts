import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.inerface';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  login: string;
  password: string;
  email: string;
  editStatus: boolean;
  editIndex: number;
  allUsers: Array<IUser> = [];
  id: number;
  constructor() { }

  ngOnInit(): void {
  }
  addUser(): void {
    // додає користувача при умові якщо всі поля заповнені
    if(this.login && this.password && this.email ){
    const newUser: IUser = new User(1, this.login, this.password, this.email);
    if (this.allUsers.length > 0) {
      newUser.id = this.allUsers.slice(-1)[0].id + 1;
    }
    this.allUsers.push(newUser);
    this.resetForm();
  }
    
  }
  
  deleteUser(index:number):void{
    if(confirm('Are you sure?')){
      this.allUsers.splice(index,1);
    }
  }
  editUser(user:IUser):void{
   this.id = user.id;
   this.login = user.login;
   this.password = user.password;
   this.email = user.email;
   this.editStatus = true;
  }
  saveUser(): void{
    const editUser: IUser = new User(this.id, this.login, this.password, this.email);
    const index = this.allUsers.findIndex(elem => elem.id === editUser.id);
    this.allUsers.splice(index, 1, editUser);
    this.editStatus = false;
    this.resetForm(); 
  }
  private resetForm():void {
    this.login = '';
    this.password = '';
    this.email = '';
  }

}
