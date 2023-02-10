import { Component } from '@angular/core'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  Users : any[] = [
    {
        "user_id": "2",
        "name": "Tesing",
        "email": "fudti@mailinator.com2",
        "password": "$2y$10$ilmi17dbSqP5QCclyDICfeUKLeOnMJWRpjsljFuk8jwop0XwWUyTi"
    },
    {
        "user_id": "3",
        "name": "Tamara Barker",
        "email": "rimotyp@mailinator.com",
        "password": "$2y$10$PcFbTIKSgsGx8ic/S1w6wOdB6oDF.W1NqkhhcLiG1eeL90CinRqPq"
    },
    {
        "user_id": "6",
        "name": "Adnan",
        "email": "mail@gmail.com",
        "password": "123123"
    },
    {
        "user_id": "7",
        "name": "Adnan",
        "email": "mail1@gmail.com",
        "password": "$2y$10$Amay2LcM4aFW/CBg1IteDeQGMHGUKsv1X/nL5dUsB4ZxZNUR/ijqe"
    }
];
editUser:any;
  constructor( 
  ){}
  ngOnInit(){
   
  }
  handleUpdate(user : any){
    console.log(user);
    this.editUser = user;
  }
}
