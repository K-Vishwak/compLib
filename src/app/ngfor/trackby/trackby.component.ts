import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent implements OnInit {

  constructor() { }

  students = [
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
  ]

  ngOnInit(): void {
  }

  refresh() {
    this.students = [
      { id: 1, name: 'first' },
      { id: 2, name: 'second' },
      { id: 3, name: 'third' },
      { id: 4, name: 'fourth' },
      { id: 5, name: 'fifth' },
      { id: 6, name: 'sixth' },
    ]
  }

  identify(index, item) {
    return item;
  }

}
