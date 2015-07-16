angular.module('app').run(
	($httpBackend) => {
		let people = [
			{
				name: 'Gregory',
				city: 'Chicago'
			},
			{
				name: 'Kelly',
				city: 'Chicago'
			},
			{
				name: 'Mike',
				city: 'Chicago'
			},
			{
				name: 'Nachiket',
				city: 'Palatine'
			}
		]

		for (var i = 0; i < 5000; i++) {
			people.push(
				{
					name: faker.name.firstName(),
					city: faker.address.city()
				}
			)
		}

		$httpBackend.whenGET('/api/people').respond(people)
	}
)
