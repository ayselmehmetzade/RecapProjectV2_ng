import { Component, Input, OnInit } from '@angular/core';
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
  apiUrl=environment.apiUrl.substr(0,environment.apiUrl.length-4);
  images: any[] = [];
  constructor(private carImageService: CarImagesService) { }

  ngOnInit(): void {

  }

  ngOnChanges(){   
    if(this.car){
      this.images = [];
      this.carImageService.getImagesByCarId(this.car.id).subscribe(response=>{
        console.log(response);
        
      this.images=response.data;      
      })
    }
  }
}
