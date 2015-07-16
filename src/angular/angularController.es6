angular.module('app').controller('angularController',
	($log, $scope, people) => {
		$scope.people = people
	}
);
