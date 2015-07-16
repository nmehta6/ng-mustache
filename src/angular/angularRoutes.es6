angular.module('app').config(
	($stateProvider) => {
		// let mustachify = (view) => { mustacheService.render('/views/directives/widgets/button.html', view) }
		$stateProvider
			.state('angular', {
				controller: 'angularController',
				templateUrl: 'angular/angular.html',
				url: '/',
				resolve: {
					people: () => {
						let people = []

						for (var i = 0; i < 5000; i++) {
							people.push(
								{
									name: faker.name.firstName(),
									city: faker.address.city()
								}
							)
						}
						return people
					}
				}
			})
	}
)
