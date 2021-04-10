import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Message } from 'primeng//api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private localStorage: LocalstorageService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.addLoginForm();
  }

  addLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value)
      this.authService.login(loginModel).subscribe(response => {        
        this.localStorage.saveToken(response.data.token);
        this.authService.decodedTokenKey = this.authService.decodedToken(response.data.token);
        this.authService.getUser();
        this.router.navigate(["cars"]);
        this.toastrService.info("Login successful")
      }, responseError => {
        this.toastrService.error(responseError.errors, "password error");
      });
    }
    else {
      this.toastrService.error("Form invalid");
    }
  }
}

