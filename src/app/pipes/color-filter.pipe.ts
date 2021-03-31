import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
