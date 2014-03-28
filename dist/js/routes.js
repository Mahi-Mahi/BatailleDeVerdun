define(['angular', 'app'], function(angular, app) {
	'use strict';

	var 1396023682774 = new Date().getTime();

	app.config(['$locationProvider',
		function($locationProvider) {
			$locationProvider.html5Mode(true);
			$locationProvider.hashPrefix('!');
		}
	]);

	return app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: '/partials/home.html?v=' + 1396023682774,
				controller: 'homeCtrl'
			});

			$routeProvider.when('/intro/', {
				templateUrl: '/partials/intro.html?v=' + 1396023682774,
				controller: 'introCtrl'
			});

			$routeProvider.when('/main/', {
				templateUrl: '/partials/main.html?v=' + 1396023682774,
				controller: 'mainCtrl',
				resolve: {
					data: function(dataService) {
						console.log("dataService");
						return dataService.promise;
					}
				}
			});

			$routeProvider.when('/resultat/', {
				templateUrl: '/partials/result.html?v=' + 1396023682774,
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