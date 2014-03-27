define(['angular', 'app'], function(angular, app) {
	'use strict';

	app.config(['$locationProvider',
		function($locationProvider) {
			$locationProvider.html5Mode(true);
			$locationProvider.hashPrefix('!');
		}
	]);

	return app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: '/partials/home.html',
				controller: 'homeCtrl'
			});

			$routeProvider.otherwise({
				redirectTo: '/'
			});
		}
	]);

});