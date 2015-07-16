//jscs:disable
angular.module('app', [
	'ngAnimate',
	<% if (useBackendless) { %>
	'ngMockE2E',
	<% } %>
	'ui.router',
	'angular-loading-bar'
]);
