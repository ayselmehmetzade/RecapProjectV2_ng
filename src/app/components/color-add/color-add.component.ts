import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.scss']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private colorService: ColorService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.colorAddForm= this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }
  add(){
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({},this.colorAddForm.value);
      console.log(colorModel);
      this.colorService.addItem(colorModel).subscribe(response=>{
        this.toastrService.success(response.message,"eklendi")
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }
 
    
  }
}