angular.module('app').config(
	($stateProvider) => {

		$stateProvider
			.state('mustache', {
				controller: 'mustacheController',
				url: '/mustache',
				templateProvider: (dataService, mustacheService, $q, $templateCache, $timeout) => {
					let deferred = $q.defer()
					let people = dataService
						.getPeople()
						.success((people) => {
							let model = {
								people
							}
							mustacheService
								.render('mustache/mustache.html', model)
								.then((renderedTemplate) => deferred.resolve(renderedTemplate))
						})
					return deferred.promise
				},
				// templateUrl: 'mustache/template.html',
				resolve: {
					people: (dataService) => dataService.getPeople()
				}
			})
	}
)
