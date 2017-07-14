import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';


@Pipe({
  name: 'time',
  pure: false
})
export class TimePipe implements PipeTransform {

  transform(input: Member[], desiredTime){
    var output: Member[] = [];
    if(desiredTime === "fast"){
      for(var i=0; i<input.length; i++){
        if(input[i].fastestTime <= 100){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredTime === "slow"){
      for(var i=0; i<input.length; i++){
        if(input[i].fastestTime > 100){
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }

}
