angular.module('app').controller('angularController',
	($log, $scope, dataService, people) => {
		$scope.people = people.data
	}
);
