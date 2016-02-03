(function() {
    var productApp = angular.module('productApp', ['ngRoute']);

    productApp.config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home.html',
                controller: "homeController"
            })

            .when('/aboutUs',{
                templateUrl:'aboutUs.html'
            })
            .when('/contactUs',{
                templateUrl:'contactUs.html'
            })

            .when('/products', {
                templateUrl: 'products.html',
                controller: "productList"
            })
			.when('/skincare', {
                templateUrl: 'SkinCare.html',
                controller: "skincareList"
            })
            .when('/productDetail/:paramId',{
                templateUrl:'productDetail.html',
                controller: 'productDetail'
            })


            .otherwise
        ({redirectTo: '/home'});
    });


    productApp.controller("homeController", function ($scope) {
        $scope.pagemessage = 'Home page called';
    });


    productApp.controller('productList',function($scope, $http){
        $scope.users = []; //declare an empty array
        $http.get("img.json").success(function(response){
            $scope.products = response;  //ajax request to fetch data into $scope.data
        });
    });
	
	productApp.controller('skincareList',function($scope, $http){
        $scope.users = []; //declare an empty array
        $http.get("img.json").success(function(response){
            $scope.skincare = response;  //ajax request to fetch data into $scope.data
        });
    });

    productApp.controller("productDetail", function($scope,$http,$routeParams){
        $http.get("img.json").success(function(data){
            for(i=0;i<data.length;i++){
                if(data[i].name === $routeParams.paramId){
                    $scope.finalDetail=data[i];
                }
            }
        });
		
		

        $scope.categoryFilter = {
            category:undefined,

        };
    });

function myFunction(){


    }

})();






