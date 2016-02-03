var myCalc = angular.module("myCalc",[]); //creating a module

//Creating a controller.

myCalc.controller("myCtrl",function($scope){
    $scope.valA=0;
    $scope.valB=0;
    $scope.addValues = function(){
        $scope.theSum = Number($scope.valA) + Number($scope.valB);
    }
});
