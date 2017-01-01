import { browser, element, by } from 'protractor';
import { TestBed } from '@angular/core/testing';

import { CustomComponent } from '../app/custom.component';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Hello Angular';

  beforeEach(function () {
    // declare the test component
    TestBed.configureTestingModule({
      declarations: [ CustomComponent ]
    });

    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
