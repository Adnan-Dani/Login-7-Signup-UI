import { Component } from '@angular/core';
import { ApiServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  imgUrl: string = 'https://colorlib.com/etc/lf/Login_v1/images/img-01.png';
  heading: string = 'Login';
  localData: any = localStorage.getItem('signUpUsers');
  usersList: any = JSON.parse(this.localData);

  loginObj: any = {
    userName: '',
    password: '',
  };
  constructor(private authService: ApiServiceService) {}

  onLogin() {
    this.authService.login(this.loginObj).subscribe(res=>{
      console.log(res);
    })
  
  }
}
