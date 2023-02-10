import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  imgUrl: string = 'https://colorlib.com/etc/lf/Login_v1/images/img-01.png';
  heading: string = "Signup";

  // storing users list
  signupUsers : any[] = [];
  signupObj : any = {
    userName: '',
    email: '',
    password: ''
  }
  loginObj : any = {
    userName : '',
    password: ''
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    }
  }
}
