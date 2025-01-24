  import { Component } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { AuthService } from '../services/auth.service';
  import { Router } from '@angular/router'; // استورد الـ Router
  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  export class RegisterComponent {
    registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
      password: new FormControl('', Validators.required)

    });

    constructor(private authService: AuthService, private router: Router) { }

    register() {
      if (this.registerForm.valid) {
        const userData = this.registerForm.value;
        this.authService.register(userData).subscribe(
          (response) => {
            console.log('Registration successful:', response);
            this.router.navigate(['/login']);
          },
          (error) => {
            console.error('Registration failed:', error);
          
          }
        );
      }
    }
  }