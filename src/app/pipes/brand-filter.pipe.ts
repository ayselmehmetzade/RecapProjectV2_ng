import { Pipe, PipeTransform } from '@angular/core';
import { IBrand } from '../interfaces/brand';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

 
  transform(value: IBrand[], brandFilterText: string): IBrand[] {
    brandFilterText = brandFilterText ? brandFilterText.toLocaleLowerCase() : '';
    return brandFilterText
      ? value.filter((b: IBrand) => b.brandName.toLocaleLowerCase().indexOf(brandFilterText) !== -1) : value;
  }

}
