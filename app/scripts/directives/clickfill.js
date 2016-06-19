'use strict';

/**
 * @ngdoc directive
 * @name clickFillApp.directive:clickFill
 * @description
 * # clickFill
 */
angular.module('clickFillApp')
  .directive('clickFill', function () {
    return {
      templateUrl: '/views/click-fill.html',
      restrict: 'E',
      controller:'ClickfillCtrl',
      scope: {
        'transitionTime':'=',
        'color':'=',
        'path': '=',
        'identifier': '='
      }
    };
  });
