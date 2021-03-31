import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
