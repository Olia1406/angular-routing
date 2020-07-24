import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/shared/interfaces/task.interface';
import { Task } from 'src/app/shared/models/task.module';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.scss']
})
export class TaskslistComponent implements OnInit {
  arrTasks: Array<ITask> = [{ id: 1, taskName: 'HTML5', checker: true },
 { id: 2, taskName: 'CSS3', checker: true },
 { id: 3, taskName: 'SCSS', checker: false },
 { id: 4, taskName: 'JavaScript', checker: false },
 { id: 5, taskName: 'Angular', checker: false }];
 id: number;
 taskName: string;
 editTaskName: string;
 checker: boolean;
 editStatus: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    this.checker = false;
    if (this.taskName) {
      const newTask: ITask = new Task(1, this.taskName, this.checker);
      if (this.arrTasks.length > 0) {
        newTask.id = this.arrTasks.slice(-1)[0].id + 1;
      }
      this.arrTasks.push(newTask);
      this.resetField();
    }
  }
  deleteTask(index: number): void {
    this.arrTasks.splice(index, 1);
  }
  resetField(): void {
    this.taskName = '';
    this.editTaskName = '';
  }
  changeChecker(task: ITask): void {
    task.checker = !task.checker;
  }
  editTask(task: ITask): void {
    this.id = task.id;
    this.editTaskName = task.taskName;
    this.checker = task.checker;
    this.editStatus = true;
  }
  saveEdit(): void {
    const editTask: ITask = new Task(this.id, this.editTaskName, this.checker);
    const index = this.arrTasks.findIndex(elem => elem.id === editTask.id);
    this.arrTasks.splice(index, 1, editTask);
    this.editStatus = false;
    this.resetField();
  }

}
