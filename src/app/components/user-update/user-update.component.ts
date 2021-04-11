import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { IUserUpdate } from 'src/app/interfaces/user-update';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  passwordUpdateForm: FormGroup;
  userUpdateForm: FormGroup;
  user: IUserUpdate
  userId: number;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private route:Router,
    private localStorage: LocalstorageService) { }

  ngOnInit(): void {
    this.geyUserById();
    this.passwordForm();
    this.userForm();

  }

  geyUserById() {
    let token = this.localStorage.getToken()
    let id: number = Number(Object.values(jwtDecode(token))[0])//cerenesor
    this.userId = id;
    this.userService.getUserById(id).subscribe(response => {
      this.user = response.data;
    })
  }
  passwordForm() {
    this.passwordUpdateForm = this.formBuilder.group({
      email: ["", Validators.required],
      oldPassword: ["", Validators.required],
      newPassword: ["", Validators.required]
    })

  }

  userForm() {
    this.userUpdateForm = this.formBuilder.group({
      userId: [""],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],

    })
  }

  updateUser(){
    if(this.userUpdateForm.valid){
      let userModel = Object.assign({}, this.userUpdateForm.value)
      let token = this.localStorage.getToken();
      let id:number=Number(Object.values(jwtDecode(token))[0])
      userModel.userId =id
      this.userService.update(userModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
        this.localStorage.removeToken();
        this.route.navigate(["/login"])
      },responseError=> {
        this.toastrService.error("Güncellenmedi");
      })
    }
    else{
      this.toastrService.warning("Form eksik","dikkat")
    }
  }


  updatePassword(){
    if(this.passwordUpdateForm.valid){
       let updatePassword = Object.assign({},this.passwordUpdateForm.value)
       this.userService.changeUserPassword(updatePassword).subscribe(response=>{        
         this.toastrService.success(response.message,"başarılı") 
         this.localStorage.removeToken(); 
         this.route.navigate(["/login"])
       },responseError=>{
         this.toastrService.error("güncellenemedi")
       })
    }
    else{
      this.toastrService.warning("Form eksik","Dikkat !")
    }
  }
}
