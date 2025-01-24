  import { Component } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { AuthService } from '../services/auth.service';
  import { Router } from '@angular/router'; // استورد الـ Router

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent {
    loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

      constructor(private authService: AuthService,  private router: Router) { }

    login() {
      if (this.loginForm.valid) {
        const userData = this.loginForm.value;
          console.log('Login data:', userData);
        this.authService.login(userData).subscribe(
          (response) => {
            console.log('Login successful:', response);
            if (response && response.role === "Admin") {
                  localStorage.setItem('token', response.token); 
                this.router.navigate(['/dashboard']);
              } else {
                  this.router.navigate(['/']);
              }
            },
            (error) => {
              console.error('Login failed:', error);
            }
          );
        }
      }
    }