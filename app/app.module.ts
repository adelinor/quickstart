import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CustomComponent }  from './custom.component';

@NgModule({
  imports:      [ BrowserModule ],
  exports:      [ CustomComponent ],
  declarations: [ AppComponent, CustomComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
