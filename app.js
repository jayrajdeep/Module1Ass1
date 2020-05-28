(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.injector=['$scope','$filter',LunchCheckController]
  function LunchCheckController($scope,$filter){
      $scope.lunchname="Enter Lunch Items";

      $scope.check=function(){
        return $scope.error="hello";
      }
  }
})();
