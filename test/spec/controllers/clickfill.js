'use strict';

describe('Controller: ClickfillCtrl', function () {

  // load the controller's module
  beforeEach(module('clickFillApp'));

  var ClickfillCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClickfillCtrl = $controller('ClickfillCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClickfillCtrl.awesomeThings.length).toBe(3);
  });
});
