import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IBrand } from 'src/app/interfaces/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brands: IBrand[] = [];
  cols: any[];
  brandFilterText="";
  displayBasic:boolean;
  brandAddForm: FormGroup;
  constructor(private brandService: BrandService, private formbuilder:FormBuilder, private toastrService:ToastrService ) { }

  ngOnInit(): void {
      this.getBrands();
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

  showBrandDialog() {
    this.displayBasic = true;
}
  getBrands() {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    })
  }
  
}
