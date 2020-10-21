import { OneService } from './one.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { Star, StarFill } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TwoPipe } from './two.pipe';
import { FormsModule } from '@angular/forms';

const icons = {
  Star,
  StarFill 
};

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    TwoPipe
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
