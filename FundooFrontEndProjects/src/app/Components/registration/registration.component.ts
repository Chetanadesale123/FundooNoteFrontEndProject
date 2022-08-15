import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userservices/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder,private user: UserService,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  Registration() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.valid)
      let reqdata = {
        FirstName: this.registerForm.value.firstName,
        LastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      }
      this.user.register(this.registerForm.value).subscribe((response: any) => {
        console.log("Register successful", response);
      }, (error: any) => {
        console.log(error);
      })
    } else {
      return;
    }
  }
  ShowPassword() {
    this.hide = !this.hide;
  }
  }


