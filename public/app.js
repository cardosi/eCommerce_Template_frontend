
var app = angular.module('ecommerceStore', ['ngRoute']);


app.controller('mainController', ['$http', function($http) {
  this.message = "connected!"
  this.products = [];
  this.productsloaded = false;


  $http({
    method: 'GET',
    url: 'http://localhost:3000/products'
  }).then(
    function(response){
      this.products = response.data;
      console.log(this.products);
      this.productsloaded = true;
    }.bind(this));



}]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5mode({ enabled: true });

  $routeProvider.when('/logIn', {
    templateUrl: 'partials/partial1.html',
    controller: 'mainController',
    controllerAs: 'ctrl'
  });
}]);
