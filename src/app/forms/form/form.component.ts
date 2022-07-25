import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('')
  });
  nameControl = new FormControl('', Validators.required);
  firstName1;
lastName;

  get firstName() {
    return this.profileForm.get('firstName');
  }

  ngOnInit(): void {
    // capture value using valueChanges.
    this.nameControl.valueChanges.subscribe(data => {
      console.log(data);
    });

    this.profileForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  inputClick() {
    // Capture value using value property on control.
    console.log(this.nameControl.value);
  }

  updateValue() {
    this.nameControl.setValue('updated value');
  }

  onSubmit() {
    console.log(this.profileForm.value);
    // this.profileForm.controls.firstName.setValue('first name');
    // this.profileForm.controls.lastName.setValue('last name');
    this.profileForm.controls.lastName.patchValue('last name');
  }
  onSubmit1() {
    
  }

}
