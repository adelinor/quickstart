import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Hello Angular';
  let expectedMsgFromComponent = 'This is a simple component';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('should display: ' + expectedMsgFromComponent, function () {
    expect(element(by.css('custom')).getText()).toEqual(expectedMsgFromComponent);
  });

});
