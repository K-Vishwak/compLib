import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetService } from './services/pet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  quantity = 10;
  // galaxyForm: FormGroup;
  getText: FormControl;
  
  constructor(private pet: PetService) {

  }

  getValue() {
    console.log(this.getText.value);  
  }

  ngOnInit() {
    this.getText = new FormControl('test');
    // this.pet.getPets().subscribe(data => console.log(data));
    // this.pet.savePet();
    // this.galaxyForm = new FormGroup({
    //   galaxy: new FormControl({value: null, disabled: false}, [Validators.required]),
    //   rating: new FormControl({value: null, disabled: true}, [Validators.required]),
    //   name: new FormControl({value: null, disabled: false}, [Validators.required])
    // });
    // this.onFormChanges();
  }

  // onFormChanges() {
  //   this.galaxyForm.get('galaxy').valueChanges.subscribe((val) => {
  //     let ratingControl = this.galaxyForm.get('rating')
  //     if(val) {
  //       ratingControl.enable();
  //     }
  //     else {
  //       ratingControl.patchValue(null);
  //       ratingControl.disable();
  //     }
  //   });
  // }

  // onSubmit() {
  //   console.log(this.galaxyForm.value);
  // }
}
