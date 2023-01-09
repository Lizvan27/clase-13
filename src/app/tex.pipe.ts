import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tex'
})
export class TexPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
