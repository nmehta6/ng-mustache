angular.module('app').directive('appTitle', function ($compile, mustacheService) {
	// let renderedTemplate = (element, attrs) => mustacheService.render('components/title/title.html', attrs)

	return {
		restrict: 'E',
		replace: true,
		link: (scope, element, attrs) => {
			mustacheService.render('components/title/title.html', attrs)
				.then((result) => {
					element.html(result);
					$compile(element.contents())(scope);
				});
		},
		scope: {
			title: '@',
			subtitle: '@'
		}
	}
});
