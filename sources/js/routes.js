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

			$routeProvider.when('/intro/', {
				templateUrl: '/partials/intro.html',
				controller: 'introCtrl'
			});

			$routeProvider.when('/main/', {
				templateUrl: '/partials/main.html',
				controller: 'mainCtrl',
				resolve: {
					data: function(dataService) {
						return dataService.getData();
					}
				}
			});

			$routeProvider.when('/resultat/', {
				templateUrl: '/partials/result.html',
				controller: 'resultCtrl',
				resolve: {
					data: function(dataService) {
						return dataService.getData();
					}
				}
			});

			$routeProvider.otherwise({
				redirectTo: '/'
			});
		}
	]);

});