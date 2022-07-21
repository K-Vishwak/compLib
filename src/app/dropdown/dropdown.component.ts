import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  constructor() {}
  selectContent = ['IND', 'USA', 'UK'];
  customContent = [
    {id: 0, name: 'All', icon: 'src/app/assets/all.svg'},
    { id: 1, name: 'IND', icon: './assets/in.svg' },
    { id: 2, name: 'USA', icon: './assets/ua.svg' },
    { id: 3, name: 'UK', icon: './assets/us.svg'},
  ];
  dropdownText: string;
  showDropdown = false;

  ngOnInit() {
  }

  selectedItem(event) {
    console.log(event.target.value);
  }

  captureValues() {
    const select1 = document.getElementById('select1') as HTMLSelectElement;
    const options1 = select1.options;
    const result = [];
    for (let i = 0; i < options1.length; i++) {
      const item = options1[i];
      if (item.selected) {
        result.push(item.value);
      }
    }
    console.log(result);
  }

  setContent(item) {
    this.dropdownText = item.name;
  }

  identify = (index) => {
    return index;
  };
}
