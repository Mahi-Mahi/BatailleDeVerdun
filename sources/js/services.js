define(['angular'], function(angular) {
	'use strict';

	/* Services */

	// Demonstrate how to register services
	// In this case it is a simple value service.
	angular.module('myApp.services', [])
		.value('version', '0.1');

	angular.module('dataService', ['ngResource'])
		.service('dataService', function($http) {
			var myData = null;

			var promise = $http.get('/data/data.object.json?CACHE_BUST', {
				method: 'GET',
				cache: true
			}).success(function(data) {
				myData = data;
			});
			return {
				promise: promise,
				getData: function() {
					return myData;
				}
			};

		});

});