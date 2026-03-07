import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // Input property to receive the name of the user from the parent component
  @Input({required: true}) name!: string;
  //@Input() name: string | undefined;

  // Input property to receive the id of the user from the parent component
  @Input({required: true}) userId!: string;

  // Property to track whether the user is currently adding a new task. It is initialized to false, indicating that the user is not in the process of adding a new task.
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}


  // Getter to filter tasks based on the userId and return only the tasks that belong to the selected user
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }


  // Method to handle the start of adding a new task. It logs a message to the console indicating that the process of adding a new task has started for the user with the specified userId.
  onStartAddTask() {
    console.log('Start adding a new task for user:', this.userId);
    this.isAddingTask = true;
  }

  // Method to handle the cancellation of adding a new task. It logs a message to the console indicating that the process of adding a new task has been canceled for the user with the specified userId, and sets the isAddingTask property back to false.
  onCloseAddTask() {
    console.log('Cancel adding a new task for user:', this.userId);
    this.isAddingTask = false;
  }
}
