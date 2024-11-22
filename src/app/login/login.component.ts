import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor (
    private router: Router,
    private fb: FormBuilder,
    private service: LoginService){}
  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  login(){
    this.service
      .login(
        this.loginForm.controls['username'].value,
        this.loginForm.controls['password'].value
    ).subscribe((token) => {
      localStorage.setItem('token', token);
      this.router.navigate(['/reunion']);
    });
    
  }
  llamarServicio(){
    this.service.algo().subscribe();
  }
}