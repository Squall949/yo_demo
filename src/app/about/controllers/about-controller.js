'use strict';
/**
 * @ngdoc function
 * @name yoDemo.controller:aboutCtrl
 * @description
 * # aboutCtrl
 * Controller of the yoDemo
 */
angular.module('yoDemo')
  .controller('aboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
