import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFormModel } from 'projects/recap/src/lib/models/form.model';
import { ICar } from 'src/app/interfaces/car';
import { CarImagesService } from 'src/app/services/car-images.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  @Input() car: ICar;
  apiUrl = environment.apiUrl.substr(0, environment.apiUrl.length - 4);
  images: any[] = [];
  formModel: IFormModel[] = [];
  formGroup: FormGroup;

  constructor(private carImageService: CarImagesService) { }

  ngOnInit(): void {

  }

  createForm() {

    let c = this.car ? this.car : null;

    this.formModel = [
      { name: 'Brand Name', control: 'brandName', type: 'text' },
      { name: 'Color Name', control: 'colorName', type: 'text' },
      { name: 'Daily Price', control: 'dailyPrice', type: 'number' },
      { name: 'Model Year', control: 'modelYear', type: 'text' },
      { name: 'Desciption', control: 'description', type: 'text'}
    ];

    this.formGroup = new FormGroup({
      brandName: new FormControl(c ? c.brandText : ''),
      colorName: new FormControl(c ? c.colorText : ''),
      dailyPrice: new FormControl(c ? c.dailyPrice : ''),
      modelYear: new FormControl(c ? c.modelYear : ''),
      description: new FormControl(c ? c.description : '')
    }
    );
  }

  ngOnChanges() {
    if (this.car) {
      this.images = [];
      this.carImageService.getImagesByCarId(this.car.id).subscribe(response => {
        console.log(response);
        this.createForm();
        this.images = response.data;
      })
    }
  }

  test(e) {
    console.log(e);
  }
}
