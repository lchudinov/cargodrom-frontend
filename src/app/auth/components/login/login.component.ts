import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../../api/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  errorMessage?: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  doLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    this.loading = true;
    this.errorMessage = undefined;
    const login = this.loginForm.controls['login'].value;
    const password = this.loginForm.controls['password'].value;
    this.auth.login(login, password)
      .pipe(
        finalize(() => this.loading = false)
      ).subscribe({
        next: () => this.processLogin(),
        error: err => this.processLoginError(err)
      });
  }

  processLoginError(err: any): void {
    console.log(err);
    this.errorMessage = JSON.stringify(err);
  }

  processLogin(): void {
    this.router.navigate(['/pages']);
  }

}
