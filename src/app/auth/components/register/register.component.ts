import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  errorMessage?: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private register: RegisterService,
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
    });
  }

  ngOnInit(): void {
  }

  get _email() {
    return this.registerForm.get('email')
  }

  clearError() {
    this.errorMessage = undefined;
  }

  doRegister() {

    console.log( this.registerForm.value );

    if (this.registerForm.errors) {


    }

    if (!this.registerForm.valid) {
      this.errorMessage = 'Все поля обязательны к заполнению!';
      return;
    }

    this.register.userId = 1000;

  }

}
