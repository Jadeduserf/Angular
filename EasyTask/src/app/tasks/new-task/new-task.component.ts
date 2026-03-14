import { Component, Output, EventEmitter, signal, inject, Input} from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  //standalone is false so no need for the imports property, because the components are declared in the app.module.ts file
  //imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  // Input property to receive the userId from the parent component. It is marked as required, indicating that the parent component must provide a value for this property.
  @Input({required: true}) userId!: string;

  // Output property to emit an event when the user cancels adding a new task. It is an instance of EventEmitter that emits void, indicating that no data is being passed with the event.
  @Output() close = new EventEmitter<void>();


  // Properties to hold the values entered by the user for the new task's title, summary, and due date. They are initialized to empty strings.
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // Injecting the TasksService to manage tasks. This allows the component to interact with the service to add new tasks or perform other task-related operations.
  private tasksService = inject(TasksService);

  // Method to handle the cancellation of adding a new task. It emits the cancel event to notify the parent component that the user has canceled the process of adding a new task.
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    // Here you would typically handle the submission of the new task, such as sending the data to a server or updating a task list.
    console.log('New Task Submitted!');
    this.tasksService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      }, 
      this.userId
    );
    this.close.emit(); // Emit the close event to notify the parent component that the task has been added and the form can be closed.
  }
}
