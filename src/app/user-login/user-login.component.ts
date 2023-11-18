import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  isAuthLoading: boolean = false;
  isFacebookLoading: boolean = false;
  isGoogleLoading: boolean = false;
username: string;
  password: string;
  constructor(private fb: FormBuilder,private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe((token) => {
      if (token) {
        console.log('Login successful!');
      } else {
        console.log('Login failed.');
      }
    });
  }

  logout(): void {
    this.authService.logout();
    console.log('Logged out.');
  }
}
