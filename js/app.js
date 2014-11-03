var AngularWorkshop = angular.module('AngularWorkshop', []);

AngularWorkshop.controller('WorldSeriesController', function ($scope, $http)
{
  $scope.hi = 'Hello World';
  
  // Retrieve the data here using $http (hint, check out $http.get)
  
  // and then use that data here:
  $scope.data = { 'YourJSONData': 'Goes Here' };  
});

