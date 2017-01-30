
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
