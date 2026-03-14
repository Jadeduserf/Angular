import { Component } from '@angular/core';
//import { HeaderComponent } from './header/header.component';
//import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
//import { TasksComponent } from './tasks/tasks.component';
//import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  //if its not standalone, we dont need to use the imports property, because the components are declared in the app.module.ts file
  //imports: [HeaderComponent, UserComponent, TasksComponent], //NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log('Usuário selecionado:', id);
    this.selectedUserId = id;
  }
}
