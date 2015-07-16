angular.module('app').factory('dataService',
	($log, $http) => {
		// Methods
		// =======
		let getPeople = () => $http.get('/api/people', {cache: true})

		// API
		// ===
		let self = {
			getPeople
		}

		return self
	}
)
