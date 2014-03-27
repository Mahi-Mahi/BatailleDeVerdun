/* global define */
"use strict";

define([], function() {
	return ['$scope', '$rootScope', '$location', '$route', 'dataService', function($scope, $rootScope, $location, $route, dataService) {
		// You can access the scope of the controller from here

		var arrdts = dataService.getData();
		$rootScope.selected_arrdts = [];

		jQuery('#map .arrdt')
			.hover(function() {
				jQuery('header .arrdt').text(jQuery(this).data('arrdt'));
				jQuery('header .pop').text(arrdts[jQuery(this).data('arrdt')]);
				jQuery('header').addClass('info');
			}, function() {

			})
			.on('click', function() {
				jQuery(this).toggleClass('selected');
				updateCount();
			});
		jQuery('#map').hover(function() {}, function() {
			jQuery('header .arrdt').text('');
			jQuery('header').removeClass('info');
		})

		var updateCount = function() {
			var total = 0;
			$rootScope.selected_arrdts = [];
			jQuery('.selected').each(function(idx, item) {
				$rootScope.selected_arrdts.push(jQuery(item).data('arrdt'));
				total += arrdts[jQuery(item).data('arrdt')];
			});
			jQuery('.deaths').text(total ? total : '');
		}

		$scope.$apply();

	}];
});