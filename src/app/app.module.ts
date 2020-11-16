import { OneService } from './one.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { Star, StarFill, HeartFill, Heart, ChevronCompactDown, ChevronCompactUp } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TwoPipe } from './two.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { PartOneComponent } from './part-one/part-one.component';
import { PartTwoComponent } from './part-two/part-two.component';
import { ErrorComponent } from './error/error.component';
import { PartThreeComponent } from './part-three/part-three.component';
import { EightComponent } from './eight/eight.component';
import { EightAComponent } from './eight-a/eight-a.component';

const icons = {
  Star,
  StarFill,
  HeartFill,
  Heart,
  ChevronCompactDown,
  ChevronCompactUp
};

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    TwoPipe,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    PartOneComponent,
    PartTwoComponent,
    ErrorComponent,
    PartThreeComponent,
    EightComponent,
    EightAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(icons),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
