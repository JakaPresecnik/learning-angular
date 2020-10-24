import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'two'
})
export class TwoPipe implements PipeTransform {

  transform(value: string, args?: any) {
    if(!value){
      return null;
    }
    const prepositions: string[] = ['the', 'in', 'of', 'on', 'from'];

    let splitString: string[] = value.toLowerCase().split(" ");

    for(let i: number = 0; i < splitString.length; i++) {
      if(i == 0 || !prepositions.includes(splitString[i])) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1);
      }
    }
    return splitString.join(' ');

  }

}
