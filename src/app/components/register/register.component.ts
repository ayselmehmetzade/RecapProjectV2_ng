import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private localStorageService:LocalstorageService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  register(){
   if(this.registerForm.valid){
     let registerModel = Object.assign({},this.registerForm.value);
     this.authService.register(registerModel).subscribe(response=>{
       this.toastrService.info(response.message,"registered")
       this.registerForm.reset();
       this.route.navigate(['/login']);
       this.toastrService.success(response.message,"Registered")
     },responseError=>{
       this.toastrService.error("valdiation exception")
   
    })}
    else{
      this.toastrService.error("Form Invalid")
    }

  }

}
