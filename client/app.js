var app = angular.module("dataStruct", []);


app.controller("linkedListCtrl", function($scope) {

	$scope.link = new linkList();
	$scope.newNode = null;
	$scope.linkArray = [];

	var getArray = function() {
		var current = $scope.link.start;
		while(current !== null) {
			$scope.linkArray.push(current.data);
			current = current.next;
		}
	}

	$scope.add = function() {

		if($scope.newNode) {
			var data = $scope.newNode;
			$scope.link.add(data);
			$scope.linkArray.push(data);
			$scope.newNode = null;
		} else {
			console.log('error');
		}
	}

	getArray();
});