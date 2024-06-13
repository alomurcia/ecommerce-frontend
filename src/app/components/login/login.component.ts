import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.authenticate(this.username, this.password).subscribe(response => {
      console.log('Authenticated', response);
      this.router.navigate(['/menu']);
    }, error => {
      console.error('Authentication failed', error);
      this.errorMessage = 'Invalid username or password';
    });
  }
}

