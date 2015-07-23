var app = angular.module("dataStruct", []);


app.controller("linkedListCtrl", function($scope) {

	$scope.link = new LinkList();
	$scope.addEndNode = null;
	$scope.addBeginningNode = null;
	$scope.linkArray;

	var toArray = function() {
		var current = $scope.link.start;
		var newArray = [];
		while(current !== null) {
			newArray.push(current.data);
			current = current.next;
		}
		return newArray;
	}

	$scope.add = function() {
		if($scope.addEndNode) {
			var data = $scope.addEndNode;
			$scope.link.add(data);
			$scope.linkArray.push(data);
			$scope.addEndNode = null;
		} else {
			console.log('error');
		}
	}

	$scope.addToFront = function() {
		if($scope.addBeginningNode) {
			var data = $scope.addBeginningNode;
			$scope.link.addAtFirst(data);
			$scope.linkArray.unshift(data);
			$scope.addBeginningNode = null;
		} else {
			console.log('error');
		}
	}

	$scope.delete = function(n) {
		$scope.link.delete(n);
		$scope.linkArray = toArray();
	}

	$scope.linkArray = toArray();
});