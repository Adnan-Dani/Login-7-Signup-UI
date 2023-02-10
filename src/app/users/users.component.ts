import { Component } from '@angular/core';
import { ApiServiceService } from './../api-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
interface User {
  user_id: number,
  userName: string,
  email: string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  Users: any;
  editUser: any;
  constructor(private userServices: ApiServiceService) {

    this.userServices.getUsers().subscribe(
      (res) => { 
        
        this.Users  = res; 
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.Users);
  }
  ngOnInit() {}
  handleEdit(user:any){
    this.editUser = user;
  }
  handleDelete(user:any){
    console.log(user);
     
    this.userServices.deleteUsers(user).subscribe(
      (res) => {
        console.log(res);
        if (res.status === true) {
          console.log(res);
          Swal.fire('Deleted', res.message, 'success');
        }
      },
      (error) => {
        console.log('Error: ', error.error);
        Swal.fire('', error.error.message, 'info');
      }
    );  
  }
  handleUpdate() {
    console.log('Clicked');
    this.userServices.updateUsers(this.editUser).subscribe(
      (res) => {
        console.log(res);
        if (res.status === true) {
          console.log(res);
          Swal.fire('Updated', res.message, 'success');
        }
      },
      (error) => {
        console.log('Error: ', error.error);
        Swal.fire('', error.error.message, 'info');
      }
    ); 
  }
  
}
