import { Component, Input, input, computed } from '@angular/core';
// computed, signal are used to create reactive state management in Angular.
//import { DUMMY_USERS } from '../dummy-users';

// Generate a random index to select a random user from DUMMY_USERS
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
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


  // Input properties to receive the avatar and name of the user from the parent component
  @Input({required : true}) avatar!: string;
  @Input({required : true}) name!: string;

  // Getter to build the image path based on the selected user's avatar
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // Method to select a random user from DUMMY_USERS when the button is clicked
  onSelectUser() {
    


    //TESTS
    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //console.log('Usuário selecionado:', this.selectedUser);
    // Update the selected user signal with a new random user from DUMMY_USERS
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
    
  }
}
