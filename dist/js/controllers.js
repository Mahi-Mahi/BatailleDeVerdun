define(['angular', 'services'], function(angular) {
	'use strict';

	/* Controllers */

	return angular.module('myApp.controllers', ['myApp.services'])

	.controller('homeCtrl', ['$scope', 'version',
		function($scope, version) {
			$scope.scopedAppVersion = version;
		}
	])
		.controller('introCtrl', ['$scope', 'version',
			function($scope, version) {
				$scope.scopedAppVersion = version;
			}
		])

	.controller('mainCtrl', ['$scope', '$injector',
		function($scope, $injector) {
			require(['controllers/mainCtrl'], function(mainCtrl) {
				$injector.invoke(mainCtrl, this, {
					'$scope': $scope
				});
			});
		}
	])

	.controller('resultCtrl', ['$scope', '$injector',
		function($scope, $injector) {
			require(['controllers/resultCtrl'], function(resultCtrl) {
				$injector.invoke(resultCtrl, this, {
					'$scope': $scope
				});
			});
		}
	]);
});