define(['angular', 'app'], function(angular, app) {
	'use strict';

	var CACHE_BUST = new Date().getTime();

	app.config(['$locationProvider',
		function($locationProvider) {
			$locationProvider.html5Mode(true);
			$locationProvider.hashPrefix('!');
		}
	]);

	return app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: '/partials/home.html?v=' + CACHE_BUST,
				controller: 'homeCtrl'
			});

			$routeProvider.when('/intro/', {
				templateUrl: '/partials/intro.html?v=' + CACHE_BUST,
				controller: 'introCtrl'
			});

			$routeProvider.when('/main/', {
				templateUrl: '/partials/main.html?v=' + CACHE_BUST,
				controller: 'mainCtrl',
				resolve: {
					data: function(dataService) {
						console.log("dataService");
						return dataService.promise;
					}
				}
			});

			$routeProvider.when('/resultat/', {
				templateUrl: '/partials/result.html?v=' + CACHE_BUST,
				controller: 'resultCtrl',
				resolve: {
					data: function(dataService) {
						return dataService.promise;
					}
				}
			});

			$routeProvider.otherwise({
				redirectTo: '/'
			});
		}
	]);

});