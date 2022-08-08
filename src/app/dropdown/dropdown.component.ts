import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  constructor() { }
  selectContent = ['IND', 'USA', 'UK'];
  customContent = [
    { id: 0, name: 'ALL', icon: 'all', checked: false },
    { id: 1, name: 'IND', icon: 'in', checked: false },
    { id: 2, name: 'USA', icon: 'us', checked: false },
    { id: 3, name: 'UE', icon: 'ua', checked: false },
    { id: 4, name: 'UB', icon: 'ua', checked: false },
    { id: 5, name: 'USB', icon: 'us', checked: false },
    { id: 6, name: 'INR', icon: 'in', checked: false },
    { id: 7, name: 'INC', icon: 'in', checked: false },
    { id: 8, name: 'UK', icon: 'ua', checked: false },
  ];
  dropdownText = '';
  showDropdown = false;
  // @Input()
  isSingleSelect = false;
  cloneContent = [];

  ngOnInit() {
     this.cloneContent = JSON.parse(JSON.stringify(this.customContent));
    // optional
    if (this.isSingleSelect) {
      this.customContent = this.customContent.splice(1);
    }
  }

  ngOnChanges() {
    if (this.isSingleSelect) {
      this.customContent.splice(1);
    }
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
  }

  setContent(item) {
    this.showDropdown = true;
    if (this.isSingleSelect) {
      this.dropdownText = !item.checked ? item.name : '';
      this.customContent.forEach(data => {
        data.checked = (data.name === item.name && !item.checked);
      });
    } else {
      const allItem = this.customContent.find(item => item.name === 'ALL');
      if (item.name !== 'ALL') {
        this.customContent.forEach(data => {
          if (data.name === item.name) {
            data.checked = !item.checked;
          }
          if (item.checked) {
            allItem.checked = !item.checked;
          }
        });
        this.dropdownText = this.customContent.filter(item => item.checked).map(data => data.name).join(',');
        if ((this.customContent.length - 1) === this.customContent.filter(item => item.checked).length) {
          this.dropdownText = 'ALL';
          allItem.checked = true;
        }
      } else {
        this.dropdownText = !item.checked ? 'ALL' : '';
        allItem.checked = !item.checked;
        this.customContent.forEach(data => data.checked = allItem.checked);
      }
    }
  }

  filterItems() {
    if (this.dropdownText.trim()) {
      this.customContent = this.cloneContent.filter(item => item.name.toLowerCase().startsWith(this.dropdownText.toLowerCase()));
    } else {
      this.customContent = this.cloneContent;
    }
  }

  identify = (index) => {
    return index;
  };
}
