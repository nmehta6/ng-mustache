angular.module('app').config(
	($stateProvider) => {

		$stateProvider
			.state('mustache', {
				controller: 'mustacheController',
				url: '/mustache',
				templateProvider: (mustacheService, $q, $templateCache, $timeout) => {
					let model = {
						people: []
					}

					for (var i = 0; i < 5000; i++) {
						model.people.push(
							{
								name: faker.name.firstName(),
								city: faker.address.city()
							}
						)
					}

					let deferred = $q.defer()
					mustacheService
						.render('mustache/mustache.html', model)
						.then((renderedTemplate) => deferred.resolve(renderedTemplate))
					return deferred.promise
				}
			})
	}
)
