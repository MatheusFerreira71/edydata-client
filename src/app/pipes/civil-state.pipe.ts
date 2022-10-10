import { Pipe, PipeTransform } from '@angular/core';

interface Options {
  1: string
  2: string
  3: string
  4: string
  5: string
}

@Pipe({
  name: 'civilState'
})

export class CivilStatePipe implements PipeTransform {

  options = {
    "1": 'Solteiro',
    "2": 'Casado',
    "3": 'Separado',
    "4": 'Divorciado',
    "5": 'Viúvo',
  }
  transform(value?: unknown): string | null {
    if (value) {
      const field: keyof Options = value as keyof Options
      return this.options[field];
    }

    return null;
  }

}
