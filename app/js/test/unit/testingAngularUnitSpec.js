describe("Testing angularJS Test Suite", function(){

	beforeEach(module('testingAngularApp'));

	describe("Testing angular Controller", function(){

		var ctrl, scope = {};
		
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			ctrl = $controller('testingAngularCtrl', {$scope:scope});
		}));

		it("should initialize the title in the scope", function(){

			expect(scope.title).toBeDefined();
			expect(scope.title).toBe('Testing Angular JS Applicaitons');

		})

		it("should add 2 destinations to the destinations list", function(){

			expect(scope.distinations).toBeDefined();
			expect(scope.distinations.length).toBe(0);

			scope.newDistination = {
				city:"London",
				country:"England"
			}

			scope.addDestination();
			expect(scope.distinations.length).toBe(1);

			expect(scope.distinations[0].city).toBe("London");
			expect(scope.distinations[0].country).toBe("England");

			scope.newDistination.city = "Frankfurt";
			scope.newDistination.country = "Germany";

			scope.addDestination();

			expect(scope.distinations.length).toBe(2);
			expect(scope.distinations[1]["city"]).toBe("Frankfurt");
			expect(scope.distinations[1]["country"]).toBe("Germany");

			

		})
	});


})