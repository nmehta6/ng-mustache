angular.module('app').factory('mustacheService',
	($log, $http, $q, $templateCache, $window) => {
		// Methods
		// =======
		let render = (templateUrl, model={}) => {
			let template = $templateCache.get(templateUrl)[1]
			template = '{{=<% %>=}}' + template + '<%={{ }}=%>'
			return $window.Mustache.render(template, model)
		}

		// API
		// ===
		let self = {
			render
		}

		return self
	}
)
