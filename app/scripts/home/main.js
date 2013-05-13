'use strict';

angular.module('datastructuresApp')
  .controller('MainCtrl', function ($scope, $log) {
    console.log('Hello from Main Controller.');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
