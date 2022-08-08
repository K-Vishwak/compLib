import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent implements OnInit {
  public content: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
