/* global define */
"use strict";

define([], function() {
	return ['$scope', '$rootScope', '$filter', 'dataService', function($scope, $rootScope, $filter, dataService) {
		// You can access the scope of the controller from here

		var arrdts = dataService.getData();

		angular.forEach($rootScope.selected_arrdts, function(arrdt, idx) {
			jQuery('.arrdt-' + arrdt).addClass('selected');
		});

		jQuery('#map .arrdt')
			.hover(function() {
					jQuery('header .arrdt').html(jQuery(this).data('arrdt') + ((jQuery(this).data('arrdt') > 1 ? '<sup>ème</sup>' : '<sup>er</sup>')));
					jQuery('header .pop').text(arrdts[jQuery(this).data('arrdt')]);
					jQuery('header').addClass('info');
				},
				function() {})
			.on('click', function() {
				jQuery(this).toggleClass('selected');
				updateCount();
			});
		jQuery('#map').hover(function() {}, function() {
			jQuery('header .arrdt').text('');
			jQuery('header').removeClass('info');
		});

		var updateCount = function() {
			var total = 0;
			$rootScope.selected_arrdts = [];
			jQuery('.selected').each(function(idx, item) {
				$rootScope.selected_arrdts.push(jQuery(item).data('arrdt'));
				total += arrdts[parseInt(jQuery(item).data('arrdt'), 10)];
			});
			jQuery('.deaths').text(total ? $filter('number')(total) : '');
		};

		$scope.$apply();

	}];
});