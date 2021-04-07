import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IBrand } from 'src/app/interfaces/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.scss']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup;

  constructor(private formbuilder:FormBuilder, private brandService: BrandService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.brandAddForm=this.formbuilder.group({
      brandName:["",Validators.required]
    })
  }  

  add(){
    if(this.brandAddForm.valid){
      let brandModel=Object.assign({}, this.brandAddForm.value);
      console.log(brandModel);
      this.brandService.addItem(brandModel).subscribe(response=>{
        this.toastrService.success(response.message,"eklendi")
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik", "Dikkat")
    }    
  }
}
