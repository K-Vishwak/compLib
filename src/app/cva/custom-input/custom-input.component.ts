import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.less'],
})
export class CustomInputComponent {
  public ratings = [
    {
      stars: 1,
      text: 'Very Bad'
    },
    {
      stars: 2,
      text: 'Bad'
    },
    {
      stars: 3,
      text: 'it\'s ok'
    },
    {
      stars: 4,
      text: 'Better'
    },
    {
      stars: 5,
      text: 'Great'
    }
  ]
  public disabledItem: boolean = false;
  public _value: number;
  public displayText: string = '';

  setRating(star: any) {
    this._value = star.stars;
    this.displayText = star.text
  }

}
