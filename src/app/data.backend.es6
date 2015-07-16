angular.module('app').run(
	($httpBackend) => {
		let people = []
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
