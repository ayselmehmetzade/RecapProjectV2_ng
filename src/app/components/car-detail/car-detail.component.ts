import { Component, Input, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';
import { CarImagesService } from 'src/app/services/car-images.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  @Input() car: ICar;
  images: any[] = [];
  constructor(private carImageService: CarImagesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.car);    
    if(this.car){
      this.carImageService.getById(this.car.id).subscribe(response=>{
      console.log(response);
      
      })
    }
  }
}
