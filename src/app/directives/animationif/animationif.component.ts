import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationif',
  templateUrl: './animationif.component.html',
  styleUrls: ['./animationif.component.scss']
})
export class AnimationifComponent implements OnInit {

   isVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
