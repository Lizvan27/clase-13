import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valor'
})
export class ValorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
