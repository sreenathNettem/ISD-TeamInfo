import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesCountDown'
})
export class PipesCountDownPipe implements PipeTransform {

  transform(timeStamp) {
    const length = parseInt(timeStamp, 10).toString().length; // '0.89'
    const value = parseInt(timeStamp.toString().slice(0, 2), 10);
    let title = '';
    let time: any = '';
    if (length <= 2) {
      title = 'Just Now';
    } else if (length <= 4) {
      title = value > 1 ? 'Mins' : 'Min';
      time = value;
    } else if (length <= 6) {
      title = value > 1 ? 'hrs' : 'hr';
      time = value;
    } else if (length <= 8) {
      title = value > 1 && value < 8 ? 'days' : value === 1 ? 'day' : value > 7 && value < 14 ? 'week' : 'weeks';
      if (value < 8) {
        time = value;
      } else {
        const weekNum = Math.floor(value / 7);
        time = weekNum;
      }
    }
    return `${time} ${title}`;
  }

}

