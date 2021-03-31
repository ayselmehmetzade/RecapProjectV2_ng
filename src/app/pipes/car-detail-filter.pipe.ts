import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carDetailFilter'
})
export class CarDetailFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
