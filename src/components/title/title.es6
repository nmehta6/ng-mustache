angular.module('app').directive('appTitle', function ($compile, mustacheService) {
	// let renderedTemplate = (element, attrs) => mustacheService.render('components/title/title.html', attrs)

	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'components/title/title.html',
		link: (scope, element, attrs) => {
			let result = mustacheService.render('components/title/title.html', attrs)
			element.html(result)
			$compile(element.contents())(scope)
		},
		scope: {
			title: '@',
			subtitle: '@'
		}
	}
});
