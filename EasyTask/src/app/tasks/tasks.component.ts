import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // Input property to receive the name of the user from the parent component
  @Input({required: true}) name!: string;
  //@Input() name: string | undefined;

  // Input property to receive the id of the user from the parent component
  @Input({required: true}) userId!: string;

  tasks = [
    {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2026-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2027-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2027-06-15',
  },
  ];

  // Getter to filter tasks based on the userId and return only the tasks that belong to the selected user
  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
}
