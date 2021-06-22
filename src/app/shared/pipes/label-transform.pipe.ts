import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelTransform'
})
export class LabelTransformPipe implements PipeTransform {

  transform(value: unknown, arg1: string): unknown {
    arg1 = arg1 === undefined ? ' ' : arg1;
    return value.toString().replace(',', `${arg1}`);
  }

}
