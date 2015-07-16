angular.module('app').config(
	($stateProvider) => {
		// let mustachify = (view) => { mustacheService.render('/views/directives/widgets/button.html', view) }
		$stateProvider
			.state('angular', {
				controller: 'angularController',
				templateUrl: 'angular/angular.html',
				url: '/',
				resolve: {
					people: (dataService) => dataService.getPeople()
				}
			})
	}
)
