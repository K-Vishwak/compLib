import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ShareService } from './../../share.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  constructor(private shareService: ShareService) { }
  parentProp = "fromParent";
  @ViewChild('child') child: ChildComponent;

  ngOnInit(): void {
  }

  parentMethod() {
    console.log('trigger via child');
  }

  callChildMethod() {
    this.child.parentProp = 'set from child method';
    this.child.childMethod();
  }

  ngAfterViewInit(): void {
    this.child.parentProp = 'set from after view Init';
  }

  callParent(item) {
    console.log('called from child: '+ item);
    this.parentProp = item;
    this.shareService.parentProp = item;
  }

}
