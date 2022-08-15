import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userservices/user.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
    });
  }
  ForgetPassword() {
    //console.log("filled data", this.forgetPasswordForm.value);
    if (this.forgetPasswordForm.valid) {
      let reqdata = {
        email: this.forgetPasswordForm.value.email,
      }
      this.user.forgetPassword(this.forgetPasswordForm.value).subscribe((response: any) => {
        console.log("forget_password successful", response);
      }, (error: any) => {
        console.log(error);

      })
    }
    else {
      return;
    }
  }
}


