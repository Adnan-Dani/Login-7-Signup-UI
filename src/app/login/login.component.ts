import { Component } from '@angular/core';
import { ApiServiceService } from '../auth-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  imgUrl: string = 'https://colorlib.com/etc/lf/Login_v1/images/img-01.png';
  heading: string = 'Login';

  loginObj: any = {
    userName: '',
    password: '',
  };
  constructor(private authService: ApiServiceService, private router: Router) {}

  onLogin() { 
    if(this.loginObj.userName !='' || this.loginObj.password !=''){
    this.authService.login(this.loginObj).subscribe(
      (res) => {
        if (res.status === true) {
          console.log(res);
          Swal.fire('Authenticated', res.message, 'success').then(() => {
            this.router.navigate(['/users']);
            localStorage.setItem('token',res.token);
          });
        }
      },
      (error) => {
        console.log('Error: ', error.error);
        Swal.fire('', error.error.message, 'info');
      }
    );
  
}else{
  Swal.fire('', 'All fields are required.', 'info');

}
  }
}
