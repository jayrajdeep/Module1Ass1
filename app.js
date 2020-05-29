(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.injector=['$scope','$filter',LunchCheckController]
  function LunchCheckController($scope,$filter){
    //  $scope.lunchname="Enter Lunch Items";
      $scope.clear = function()
      {
          $scope.Errmessage ="";
          $scope.message ="";
      }

      $scope.check = function() {
        var a = $scope.lunchname;

        if(a == null || a == "" || a == undefined){
          $scope.message="";
        return $scope.Errmessage="Please enter data first";
        }
        else
        {
          var items = a.split(',');
          var arritems = items.filter(function(e){return e});
        }

        if(arritems.length <= 3){
          console.log(arritems);
          $scope.Errmessage="";
        return $scope.message="Enjoy!";
        }

        if(arritems.length > 3){
          console.log(arritems);
          $scope.Errmessage="";
        return $scope.message="Too much!";
        }
      }
  }
})();
