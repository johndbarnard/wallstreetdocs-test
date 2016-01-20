'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Coding test app', function() {

  it('should automatically redirect to /login when not logged in', function() {
    browser.get('#/dashboard');
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  });

});
