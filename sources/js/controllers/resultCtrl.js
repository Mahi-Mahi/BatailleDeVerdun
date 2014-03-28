/* global define */
"use strict";

define([], function() {
	return ['$scope', '$rootScope', '$location', '$filter', 'dataService', function($scope, $rootScope, $location, $filter, dataService) {

		var arrdts = dataService.getData();

		if (typeof($rootScope.selected_arrdts) == "undefined") {

			$location.path(' / ');

		} else {

			if ($rootScope.selected_arrdts.length === 0) {

				$location.path(' / main / ');

			} else {

				var arrdts_text = '';
				var max_displayed_arrdts = 3;

				if ($rootScope.selected_arrdts.length <= max_displayed_arrdts) {
					angular.forEach($rootScope.selected_arrdts, function(arrdt, idx) {
						var prefix, suffix;
						switch (idx) {
							case 0:
								prefix = '';
								break;
							default:
								prefix = ', ';
								break;
							case max_displayed_arrdts - 1:
								prefix = ' et ';
								break;
						}
						switch (arrdt) {
							case 1:
								suffix = 'er';
								break;
							default:
								suffix = 'ème';
								break;
						}
						arrdts_text += prefix + " le " + arrdt + "<sup>" + suffix + "</sup>";
					});
					jQuery('.arrdts_text').html(arrdts_text);
				} else {
					jQuery('.arrdts_text').html($rootScope.selected_arrdts.length + " arrondissements");
				}

				var deaths = 0;
				angular.forEach($rootScope.selected_arrdts, function(arrdt) {
					deaths += arrdts[parseInt(arrdt, 10)];
				});
				jQuery('.deaths').text($filter('number')(deaths));
				if (deaths < 300000)
					jQuery('.alert').show();

			}
		}

		$scope.$apply();
	}];
});