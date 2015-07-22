class AngularController {
	constructor(people) {
		this.people = people.data
	}
}

angular.module('app').controller('angularController', AngularController)
