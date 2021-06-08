import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SpyParentComponent } from './spy/spy.component';
import { SpyDirective } from './spy.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    SpyParentComponent,
    SpyDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
