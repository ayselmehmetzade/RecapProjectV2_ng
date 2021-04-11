import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IBrand } from 'src/app/interfaces/brand';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brands: IBrand[] = [];
  brand: IBrand;
  showUpdateForm: boolean;
  showAddForm: boolean;
  brandFilterText = "";
  brandAddForm: FormGroup;
  brandUpdateForm: FormGroup;
  roles:string[];
  constructor(
    private brandService: BrandService,
    private formbuilder: FormBuilder, 
    private toastrService: ToastrService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.roles=this.authService.getUser().roles; 
    console.log(this.roles.indexOf('brand.operation'));
       
    this.getBrands();
    this.createAddForm();
    this.createUpdateForm();
  }
  getBrands() {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    })
  }

  updateBrand(brand: IBrand) {
    this.showUpdateForm = true;
    this.brand = brand;
    this.brandUpdateForm.patchValue({
      brandId: this.brand.brandId,
    })
  }
  createAddForm() {
    this.brandAddForm = this.formbuilder.group({
      brandName: ["", Validators.required]
    })
  }
  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.addItem(brandModel).subscribe(response => {
        this.toastrService.success(response.message, "eklendi")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, responseError => {
        this.toastrService.error("Yetkiniz Yok", "Dikkat")
      })
    }
    else {
      this.toastrService.error("Formunuz Eksik", "Dikkat")
    }
  }

  createUpdateForm() {
    this.brandUpdateForm = this.formbuilder.group({
      brandId: [""],
      brandName: ["", Validators.required]
    })
  }

  updateForBrand() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value)
      this.brandService.update(brandModel).subscribe(response => {
        this.toastrService.success(response.message, "Güncellendi")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, responseError => {
        this.toastrService.error("Güncellenemedi", "Dikkat")
      })
    }
  }

  deleteBrand(brand: IBrand) {
    this.brandService.delete(brand).subscribe(
      (response) => {
        this.toastrService.success('Silme işlemi başarılı');
        setTimeout(() => {
          window.location.reload();
        }, 1000);

      },
      (responseError) => {
        this.toastrService.error(responseError.errors, 'İşlem Başarısız');
      }
    );

  }
}
