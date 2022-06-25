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
    private userService: UserService
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
    this.userService.userLogin({
      body: { login, password }
    }).pipe(
      finalize(() => this.loading = false)
    ).subscribe({
      next: result => this.processLogin(result),
      error: err => this.processLoginError(err)
    });
  }

  processLoginError(err: any): void {
    console.log(err);
    this.errorMessage = JSON.stringify(err);
  }

  processLogin(result: { token: string; token_expire: string; refresh_token: string; refresh_token_expire: string; }): void {
    throw new Error('Method not implemented.');
  }

}
