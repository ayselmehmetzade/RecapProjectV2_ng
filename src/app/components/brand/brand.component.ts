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
  brandFilterText="";

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
      this.getBrands();
  }


  getBrands() {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    })
  }
  
}
