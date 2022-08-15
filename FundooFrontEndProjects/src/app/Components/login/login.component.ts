import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });

  }
  login() {
    if (this.loginForm.valid) {
      
      let reqdata = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.user.login(reqdata).subscribe((response: any) => {
        console.log("login successful", response);
        localStorage.setItem("token",response.response)
      }, (error: any) => {
        console.log(error);
      })
    } else {
      return;
    }
  }
  }


