import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TaskslistComponent } from './works/taskslist/taskslist.component';

import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    UserslistComponent,
    TaskslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
