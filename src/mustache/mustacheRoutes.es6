angular.module('app').config(
	($stateProvider) => {

		$stateProvider
			.state('mustache', {
				controller: 'mustacheController',
				url: '/mustache',
				// templateUrl: 'mustache/mustache.html',
				templateProvider: (dataService, mustacheService, $http, $q, $templateCache, $timeout) => {
					let deferred = $q.defer()
					let people = dataService
						.getPeople()
						.success((people) => {
							let model = {
								people
							}
							mustacheService
								.asyncRender('mustache/mustache.html', model)
								.then((renderedTemplate) => deferred.resolve(renderedTemplate))
						})
					return deferred.promise
				},
				resolve: {
					people: (dataService) => dataService.getPeople()
				}
			})
	}
)
