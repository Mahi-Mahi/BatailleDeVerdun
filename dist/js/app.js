define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	'angularRoute',
	'angularResource',
	'angularSanitize',
	'angularLocale',
	'jquery',
	'jqueryMigrate',
	'jquerySvg',
	'jquerySvgDom'
	// 'angularAnimate',
], function(angular, filters, services, directives, controllers) {
	'use strict';

	// Declare app level module which depends on filters, and services

	return angular.module('myApp', [
		'ngRoute',
		'ngResource',
		'ngSanitize',
		'ngLocale',
		// 'ngAnimate',
		'myApp.controllers',
		'myApp.filters',
		'myApp.services',
		'myApp.directives',
		'dataService'
	]);
});