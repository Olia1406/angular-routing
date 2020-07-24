import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TaskslistComponent } from './works/taskslist/taskslist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children:[
    // { path: '', redirectTo:'cenzor', pathMatch:'full'},
    { path: 'cenzor', component: CenzorComponent },
    { path: 'userslist', component: UserslistComponent },
    { path: 'taskslist', component: TaskslistComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
