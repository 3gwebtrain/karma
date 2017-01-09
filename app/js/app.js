var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularCtrl', function($rootScope,$scope){
	$scope.title = "Testing Angular JS Applicaitons";

	$scope.distinations = [];

	$scope.newDistination = {
		city:undefined,
		country:undefined
	}

	$scope.addDestination = function(){

		$scope.distinations.push({
			city : $scope.newDistination.city,
			country : $scope.newDistination.country
		})

	}

});