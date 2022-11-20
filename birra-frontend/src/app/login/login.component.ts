import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  hide = true;
  invalidLogin = false;
  msgInvalid = '';
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.formGroup = this._builderForm();
  }


  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(() => this.invalidLogin = false);
  }

  private _builderForm(): FormGroup {
    return this._fb.group({
      user: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.maxLength(20), Validators.minLength(4)]]
    })
  }


  sendForm(): void {
    const values = this.formGroup.value;

    if (this.formGroup.invalid) {
      Object.keys(values).forEach((key: string) => {
        this.formGroup.controls[key].markAsTouched();
        this.formGroup.controls[key].markAsDirty();
      });
      return;
    }

    this._authService.login(values.user, values.password).subscribe(res => {
      localStorage.setItem('token', res.token);
      this._router.navigate(['main']);
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.msgInvalid = err.error.msg;
      this.invalidLogin = true;
    });
  }
}
