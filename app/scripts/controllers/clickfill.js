'use strict';

/**
 * @ngdoc function
 * @name clickFillApp.controller:ClickfillCtrl
 * @description
 * # ClickfillCtrl
 * Controller of the clickFillApp
 */
angular.module('clickFillApp')
  .controller('ClickfillCtrl', function ($scope, $timeout) {
    $scope.clippingPath='url(#'+$scope.identifier+')';
    $scope.startValues={
      cx:0,
      cy:0,
      r:0,
      fill:$scope.color.start,
      transition: 'r '+$scope.transitionTime.close+'ms, fill '+$scope.transitionTime.close+'ms'
    };
    $scope.endValues={
      cx:100,
      cy:100,
      r:10,
      fill:$scope.color.end,
      transition:'all ' + $scope.transitionTime.open + 'ms ease-in'
    };
    $scope.starting=true;

    $scope.newClick=function(event){
      $scope.container = {
        width:event.currentTarget.clientWidth,
        height:event.currentTarget.clientHeight

      };
      if(!$scope.toggledOn){
        if(!$scope.starting){
          $scope.starting=true;

        }
        setStyling(event).then(function(){
          $scope.starting=false;
          $timeout($scope.transitionTime.open).then(function(){
            //$scope.starting=true;
            if(!$scope.starting){
              $scope.toggledOn=true;
            }
            //$scope.toggledOn=true;

          });
        });
      } else{
        $scope.toggledOn=false;
        setStyling(event).then(function(){
          $scope.starting=true;
        });

      }



    };

    function setStyling(event){
      $scope.startValues.cx=event.offsetX;
      $scope.startValues.cy=event.offsetY;
      $scope.endValues.cx=event.offsetX;
      $scope.endValues.cy=event.offsetY;
      $scope.endValues.r=calculateSize(event.offsetX, event.offsetY);
      return $timeout(20);

    }

    function calculateSize(xValue, yValue){
      var left = xValue < $scope.container.width/2;
      var top = yValue < $scope.container.height/2;
      var x,y;
      x = (left ? $scope.container.width-xValue : xValue);
      y = (top ? $scope.container.height-yValue : yValue);
      console.log("x: " + x);
      console.log("y: " + y);
      console.log("ans: " + Math.sqrt(x*x+y*y));

      return Math.sqrt(x*x+y*y);
    }
  });
