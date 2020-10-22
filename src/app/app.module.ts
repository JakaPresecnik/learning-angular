import { OneService } from './one.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { Star, StarFill, HeartFill, Heart } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TwoPipe } from './two.pipe';
import { FormsModule } from '@angular/forms';
import { ThreeComponent } from './three/three.component';

const icons = {
  Star,
  StarFill,
  HeartFill,
  Heart 
};

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    TwoPipe,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(icons),
    FormsModule
  ],
  providers: [
    OneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
