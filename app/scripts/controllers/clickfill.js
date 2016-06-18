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
    var lastStarted = new Date();
    var transitionTime = {
      open:1000,
      close:500
    };
    var color = {
      start:"#FF5722",
      end :"#FFEB3B"
    }
    $scope.startValues={
      cx:0,
      cy:0,
      r:0,
      fill:color.start,
      transition: 'r '+transitionTime.close+'ms, fill '+transitionTime.close+'ms'
    };
    $scope.endValues={
      cx:100,
      cy:100,
      r:500,
      fill:color.end,
      transition:'all ' + transitionTime.open + 'ms'
    };
    $scope.starting=true;

    $scope.newClick=function(event){
      $scope.container = {
        width:event.currentTarget.clientWidth,
        height:event.currentTarget.clientHeight

      };
      console.log("srcElem");
      //console.log(element);
      if(!$scope.toggledOn){
        if(!$scope.starting){
          $scope.starting=true;

        }
        setStyling(event).then(function(){
          $scope.starting=false;
          $timeout(transitionTime.open/3).then(function(){
            //$scope.starting=true;
            $scope.toggledOn=true;

          })
        })
      } else{
        $scope.toggledOn=false;
        setStyling(event).then(function(){
          $scope.starting=true;
        });

      }



    }
    $scope.test=function(){
      console.log("TESTING");
    }

    function setStyling(event){
      $scope.startValues.cx=event.offsetX;
      $scope.startValues.cy=event.offsetY;
      $scope.endValues.cx=event.offsetX;
      $scope.endValues.cy=event.offsetY;
      $scope.endValues.r=calculateSize(event.offsetX, event.offsetY);
      return $timeout(10);

    }

    function calculateSize(xValue, yValue){
      let left = xValue < $scope.container.width/2;
      let top = yValue < $scope.container.height/2;
      var x,y;
      x = (left ? $scope.container.width-xValue : xValue);
      y = (top ? $scope.container.height-yValue : yValue);
      console.log("X:" + x + " Y: " + y);
      console.log("LEFT:" + left + "TOP:"+top)
      return Math.sqrt(x*x+y*y);
    }
  });
