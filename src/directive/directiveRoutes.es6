angular.module('app').config(
	($stateProvider) => {

		$stateProvider
			.state('directive', {
				url: '/directive',
				controller: () => {},
				templateUrl: 'directive/directive.html'
			})
	}
)
