import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {Config} from '../../models/Config';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  userFirstName: string = '';
  userLastName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  userConfirmPassword: string = '';

  constructor(private router: Router, private authService: AuthenticationService, private toastr: ToastrService) {
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }

  register() {
    console.log(this.userPassword);
    console.log(this.userEmail);
    console.log(this.userFirstName);
    console.log(this.userLastName);
    console.log(this.userConfirmPassword);

    if(this.userPassword !== this.userConfirmPassword) {
      this.toastr.error("Password does not match", "Error");
      return;
    }

    let data = {
      'firstName': this.userFirstName,
      'lastName': this.userLastName,
      'email': this.userEmail,
      'password': this.userPassword
    };

    this.authService.register(data).subscribe(response => {
      console.log('response', response);
      this.toastr.success(response['message'], 'Success');
      this.router.navigateByUrl('/login');
    }, error => {
      console.log('error', error);
      // this.toastr.error('Invalid credentials', 'Error');
    });
  }

}
