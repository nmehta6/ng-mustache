angular.module('app').factory('mustacheService',
	($log, $http, $q, $templateCache, $window) => {
		// Methods
		// =======
		let render = (templateUrl, model={}) => {
			// compiledTemplate(model)
			let deferred = $q.defer()
			let template = $http
				.get(templateUrl, {cache: $templateCache})
				.success((template) => {
					template = '{{=<% %>=}}' + template + '<%={{ }}=%>'
					deferred.resolve($window.Mustache.render(template, model))
				})

			return deferred.promise;
		}

		// API
		// ===
		let self = {
			render
		}

		return self
	}
)
