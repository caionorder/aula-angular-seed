'use strict';

angular.module('myApp.Beers', ['ngRoute','BeerServiceModule'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/beers', {
    templateUrl: 'modules/beers/list.html',
    controller: 'BeersList'
  });
}])

.controller('BeersList', BeersList)

function BeersList($scope, $http, BeerService) {
	
    var url = 'http://127.0.0.1:3000/beers';
    var method = 'GET';

    $scope.reverse = true;
    $scope.predicate = 'name';

    $scope.ordenar = function(predicado){
        $scope.reverse = !$scope.reverse;
        $scope.predicate = predicado;
    }

    $http({
      url: url,
      method: method
    }).
    success(function(data){
      console.log('Data: ', data);
      $scope.beers = data;
    }).
    error(function(err){
      console.log('Erro: ', err);
    });

}

BeersList.$inject = ['$scope','$http','BeerService'];