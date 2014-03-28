/* global require */
/* global angular */

var 1396023682774 = new Date().getTime();

require.config({
	urlArgs: "bust=" + 1396023682774,
	paths: {
		angular: '/vendor/angular/angular',
		angularRoute: '/vendor/angular-route/angular-route',
		angularSanitize: '/vendor/angular-sanitize/angular-sanitize',
		angularResource: '/vendor/angular-resource/angular-resource',
		// angularAnimate: '/vendor/angular-animate/angular-animate',
		angularMocks: '/vendor/angular-mocks/angular-mocks',
		angularLocale: '/js/lib//angular-locale_fr-fr',
		jquery: '/vendor/jquery/dist/jquery',
		jqueryMigrate: '/vendor/jquery-migrate/jquery-migrate',
		jquerySvg: '/js/lib/jquery.svg',
		jquerySvgDom: '/js/lib/jquery.svgdom',

	},
	shim: {
		'angular': {
			'exports': 'angular',
			deps: ['jquery', 'jqueryMigrate']
		},
		'angularRoute': ['angular'],
		'angularSanitize': ['angular'],
		'angularResource': ['angular'],
		// 'angularAnimate': ['angular'],
		'angularMocks': {
			deps: ['angular'],
			'exports': 'angular.mock'
		},
		'angularLocale': {
			deps: ['angular'],
			'exports': 'ngLocale'
		},
		'jqueryMigrate': {
			deps: ['jquery']
		},
		'jquerySvg': {
			deps: ['jqueryMigrate']
		},
		'jquerySvgDom': {
			deps: ['jquerySvg']
		}
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});