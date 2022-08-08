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
import { ClickoutDirective } from './directives/clickout.directive';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingComponent } from './rating/star-rating/star-rating.component';
import { CustomInputComponent } from './cva/custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { CvaInputComponent } from './cva/cva-input/cva-input.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { CalloutComponent } from './directives/callout/callout.component';
import { CalloutDirective } from './directives/callout.directive';
import { AnimatedIfDirective } from './directives/animated-if.directive';
import { AnimationifComponent } from './directives/animationif/animationif.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule ],
  declarations: [ AppComponent, HelloComponent, DropdownComponent, ParentComponent, Parent1Component, ChildComponent, Child2Component, FormComponent, TrackbyComponent, CenteralignComponent, ClickoutDirective, StarRatingComponent, CustomInputComponent, CvaInputComponent, HighlightDirective, RainbowDirective, CalloutComponent, CalloutDirective, AnimatedIfDirective, AnimationifComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ShareService]
})
export class AppModule { }
