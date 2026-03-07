import { Component, Input, input, computed, Output, output, EventEmitter } from '@angular/core';
import { type User } from "./user.model";
import { CardComponent } from "../shared/card/card.component";

// computed, signal are used to create reactive state management in Angular.
//import { DUMMY_USERS } from '../dummy-users';

// Generate a random index to select a random user from DUMMY_USERS
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// Define a User type to represent the structure of user data
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

// Define a User interface to represent the structure of user data
// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {


  //TESTS
  //Signal for the selected user, initialized with a random user from DUMMY_USERS
  //selectedUser = signal(DUMMY_USERS[randomIndex]);


  // Using the new input() function to define input properties for avatar and name
  //avatar = input.required<string>();
  //name = input.required<string>();
    //Computed signal to build the image path based on the selected user's avatar
  //imagePath = computed(() => {
  //  return 'assets/users/' + this.avatar()
  //});

  // Using the new output() function to define an output event emitter for user selection
  //select = output<string>();


  // Input properties to receive the avatar and name of the user from the parent component
  //@Input({required : true}) avatar!: string;
  //@Input({required : true}) name!: string;
  //@Input({required : true}) id!: string;

  @Input({required: true}) user!: User;

  @Input({required: true}) selected!: boolean;

  // Output event emitter to notify the parent component when a user is selected
  @Output() select = new EventEmitter<string>();

  // Getter to build the image path based on the selected user's avatar
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Method to select a random user from DUMMY_USERS when the button is clicked
  onSelectUser() {
    // Emit the select event with the user's id to notify the parent component
    this.select.emit(this.user.id);

    


    //TESTS
    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //console.log('Usuário selecionado:', this.selectedUser);
    // Update the selected user signal with a new random user from DUMMY_USERS
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
