import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from "./task.model";

// interface Task {
//   id: string;
//   userId: string;
//   title: string;
//   summary: string;
//   dueDate: string;
// }

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // Input property to receive the task data from the parent component
  @Input({required: true}) task!: Task;

  // Output event emitter to notify the parent component when a task is completed
  @Output() complete = new EventEmitter<string>();

  onComleteTask() {
    this.complete.emit(this.task.id);
  }

}
