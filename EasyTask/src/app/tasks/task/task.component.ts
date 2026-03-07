import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from "./task.model";
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

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
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // Input property to receive the task data from the parent component
  @Input({required: true}) task!: Task;



  private taskService = inject(TasksService);

  onComleteTask() {
    this.taskService.removeTask(this.task.id);
  }

}
