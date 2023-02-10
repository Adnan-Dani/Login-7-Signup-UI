import { Component } from '@angular/core';
import { ApiServiceService } from '../auth-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  imgUrl: string = 'https://colorlib.com/etc/lf/Login_v1/images/img-01.png';
  heading: string = "Signup";

  // storing users list
  signupObj : any = {
    userName: '',
    email: '',
    password: ''
  }
  loginObj : any = {
    userName : '',
    password: ''
  }
  constructor(private authService: ApiServiceService, private router: Router) {}

  onSignUp(){
    if(this.signupObj.userName !='' || this.signupObj.email !=''  || this.signupObj.password !=''){
      this.authService.signup(this.signupObj).subscribe(res=>{
        if(res.status === true){
       Swal.fire('Registered', res.message, 'success').then(()=>{
         this.router.navigate(['/login']);
         this.signupObj = {
           userName: '',
           email: '',
           password: ''
         } 
       });
     
        } 
     },
     error =>{
       console.log("Error: ",error.error);
       Swal.fire('', error.error.message, 'info');
     })
    }else{
      Swal.fire('', 'All fields are required.', 'info');

    }
    
    
  }
}
