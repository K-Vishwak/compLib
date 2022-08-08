import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cva-input',
  templateUrl: './cva-input.component.html',
  styleUrls: ['./cva-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CvaInputComponent,
      multi: true
    }
  ]
})
export class CvaInputComponent implements OnInit, ControlValueAccessor {
  value: string;

  onChange = (fn: Function) => { };
  onTouch = () => { };

  constructor() { }

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  setValue(event) {
    console.log(event.target.value);
    this.value = event.target.value;
    this.onChange(event.target.value);
    this.onTouch();
  }

  ngOnInit(): void {
  }

}
