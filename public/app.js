
var app = angular.module('ecommerceStore', []);

app.controller('mainController', ['$http', function($http) {
  this.message = "connected!"




this.createUser = function(){
  $http({
    method: 'POST',
    url: 'https://localhost:3000/users',
    data: this.newUserData
  }).then(function(result){
    console.log('Data from server: ', result);
  }.bind(this));
}

this.allProducts = function(){
  $http({
    method: 'GET',
    url: 'https://localhost:3000/products'
  }).then(function(results){
    console.log('all products from db: ', results);
  }.bind(this));
}

this.createProduct = function(){
  $http({
    method: 'POST',
    url: 'https://localhost:3000/products',
    data: this.newProductData
  }).then(function(results){
    console.log('Product data from server: ', results);
  }.bind(this));
}

//for a 'GET' for transaction (if customer wanted to see all of their transactions) we'll need authentication

this.createTransaction = function(){
  $http({
    method: 'POST',
    url: 'https://localhost:3000/transactions',
    data: this.newTransaction
  }).then(function(results){
    console.log('open transaction data: ', results);
  }.bind(this));
}



}]);
