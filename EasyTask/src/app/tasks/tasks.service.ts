import { Inject, Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

// Service to manage tasks in the application. It provides methods to retrieve, add, and remove tasks. The service is decorated with @Injectable, which allows it to be injected into components and other services throughout the application.
@Injectable({
  providedIn: 'root'
})

export class TasksService {
    private tasks = [
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

    // Constructor to initialize the service. It retrieves any existing tasks from local storage and populates the tasks array with that data. If there are no tasks in local storage, it initializes the tasks array with a default set of tasks.
    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        } 
    }

    // Method to retrieve tasks for a specific user based on their userId. It filters the tasks array and returns only the tasks that belong to the specified user.
    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    // Method to add a new task to the tasks array. It takes the task data and userId as arguments, creates a new task object with a unique id, and pushes it to the tasks array.
    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.push({
        id: 't' + (this.tasks.length + 1), // Generate a new id based on the current number of tasks
        userId: userId, // Use the provided userId for the new task
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date
        });
        this.saveTasks(); // Save the updated tasks array to local storage after adding a new task
    }

    // Method to remove a task from the tasks array based on its id. It filters the tasks array and updates it to exclude the task with the specified id.
    removeTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks(); // Save the updated tasks array to local storage after removing a task
    }

    // Private method to save the current state of the tasks array to local storage. It converts the tasks array to a JSON string and stores it under the key 'tasks' in local storage.
    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}
