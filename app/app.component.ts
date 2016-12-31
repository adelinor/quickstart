import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><custom></custom>`,
})
export class AppComponent  { name = 'Angular'; }
