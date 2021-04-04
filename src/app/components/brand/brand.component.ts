import { Component, OnInit } from '@angular/core';
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

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'brandId', header: 'Brand Id' },
      { field: 'brandName', header: 'Brand Name' },
    ];
    this.getBrands();
  }


  getBrands() {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    })
  }
}
