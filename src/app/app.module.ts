import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ParentComponent } from './share/parent/parent.component';
import { Parent1Component } from './share/parent1/parent1.component';
import { ChildComponent } from './share/parent/child/child.component';
import { Child2Component } from './share/parent/child2/child2.component';
import { ShareService } from './share.service';
import { FormComponent } from './forms/form/form.component';
import { TrackbyComponent } from './ngfor/trackby/trackby.component';
import { CenteralignComponent } from './center-align/centeralign/centeralign.component';
import { ClickoutDirective } from './clickout.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, DropdownComponent, ParentComponent, Parent1Component, ChildComponent, Child2Component, FormComponent, TrackbyComponent, CenteralignComponent, ClickoutDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ShareService]
})
export class AppModule { }
