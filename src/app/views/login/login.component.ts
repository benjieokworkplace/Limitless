import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Config} from '../../models/Config';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  userEmail: string = '';
  userPassword: string = '';

  constructor(private router: Router, private toastr: ToastrService, private authService: AuthenticationService) {
  }

  sendToLogin() {
    //use the auth service to make login
    console.log(this.userPassword);
    console.log(this.userEmail);

    this.authService.login(this.userEmail, this.userPassword).subscribe(response => {
      console.log('response', response);
      Config.saveUserDetails(response);
      this.router.navigateByUrl('/dashboard');
      this.toastr.success('Login successful', 'Success');
    }, error => {
      console.log('error', error);
      this.toastr.error('Invalid credentials', 'Error');
    });
  }

  navigateToRegister() {
    this.router.navigateByUrl('/register');
  }


}
