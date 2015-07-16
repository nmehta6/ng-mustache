angular.module('app').factory('mustacheService',
	($log, $http, $q, $templateCache, $window) => {
		// Methods
		// =======
		let render = (templateUrl, model={}) => {
			let template = $templateCache.get(templateUrl)[1]
			template = '{{=<% %>=}}' + template + '<%={{ }}=%>'
			return $window.Mustache.render(template, model)
		}

		let asyncRender = (templateUrl, model={}) => {
			let deferred = $q.defer()
			$http.get('mustache/mustache.html', {cache: $templateCache})
				.success((template) => {
					template = '{{=<% %>=}}' + template + '<%={{ }}=%>'
					deferred.resolve($window.Mustache.render(template, model))
				})
			return deferred.promise
		}


		// API
		// ===
		let self = {
			asyncRender,
			render
		}

		return self
	}
)
