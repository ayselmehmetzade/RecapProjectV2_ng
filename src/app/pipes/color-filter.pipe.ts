import { Pipe, PipeTransform } from '@angular/core';
import { IColor } from '../interfaces/color';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: IColor[], colorFilterText: string): IColor[] {
    colorFilterText= colorFilterText? colorFilterText.toLocaleLowerCase():"";
    return colorFilterText ? value.filter((c:IColor)=>c.colorName.toLocaleLowerCase().indexOf(colorFilterText)!==-1) : value;
  }
}
