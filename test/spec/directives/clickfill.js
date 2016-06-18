'use strict';

describe('Directive: clickFill', function () {

  // load the directive's module
  beforeEach(module('clickFillApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<click-fill></click-fill>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the clickFill directive');
  }));
});
