import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IColor } from 'src/app/interfaces/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  colors: IColor[] = []
  color: IColor;
  showAddForm: boolean;
  showUpdateForm: boolean;
  colorAddForm: FormGroup;
  colorUpdateForm: FormGroup;
  colorFilterText = "";
  constructor(private colorService: ColorService, private formbuilder: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getColors();
    this.createAddForm();
    this.createUpdateForm();
  }

  getColors() {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data
    })
  }
  updateColor(color: IColor) {
    this.showUpdateForm = true;

    this.color = color;
    this.colorUpdateForm.patchValue({
      colorId: this.color.colorId
    })
  }
  createAddForm() {
    this.colorAddForm = this.formbuilder.group({
      colorName: ["", Validators.required]
    })
  }
  add() {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);

      this.colorService.addItem(colorModel).subscribe(response => {
        this.toastrService.success(response.message, "eklendi")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama Hatası")
          }
        }
      })
    }
    else {
      this.toastrService.error("Formunuz Eksik", "Dikkat")
    }
  }

  createUpdateForm() {
    this.colorUpdateForm = this.formbuilder.group({
      colorId: [""],
      colorName: ["", Validators.required]
    })
  }

  updateForColor() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({}, this.colorUpdateForm.value)
      this.colorService.update(colorModel).subscribe(response => {
        this.toastrService.success(response.message, "Güncellendi")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, responseError => {
        this.toastrService.error("Güncellenemedi", "Dikkat")
      })
    }
  }

  deleteColor(color: IColor) {


    this.colorService.delete(color).subscribe(
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
