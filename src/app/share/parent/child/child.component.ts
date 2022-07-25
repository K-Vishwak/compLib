import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShareService } from './../../../share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private shareService: ShareService) { }
  @Input() parentProp: string;
  @Output() callItsParent = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(this.parentProp);
  }

  childMethod() {
    console.log('called from parent');
    console.log(this.parentProp);
    console.log('From Service: ' + this.shareService.parentProp);
  }

  // ngAfterViewChecked(): void {
  //     console.log(this.parentProp);
  // }

  callParent(parentProp) {
    this.callItsParent.emit(parentProp);
  }

}
