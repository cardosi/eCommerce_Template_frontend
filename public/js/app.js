
var app = angular.module('ecommerceStore', []);


app.controller('mainController', ['$http', function($http) {
  this.message = "connected!"
  this.products = [];
  this.productsloaded = false;
  this.url = 'http://localhost:3000';
  this.loggedIn = false;
  this.user = {};

//CALL TO GET PRODUCTS - This should run on page load
  $http({
    method: 'GET',
    url: 'http://localhost:3000/products'
  }).then(
    function(response){
      this.products = response.data.products;
      console.log(response);
      this.productsloaded = true;
    }.bind(this));

//CALL TO LOG IN - adds token to localStorage and changes Log In button in nav
  this.login = function(userPass) {
    console.log(userPass)
    $http({
      method: 'POST',
      url: this.url + '/users/login',
      data: {user: {username: userPass.username, password: userPass.password}},
    }).then(function(response){
      console.log(response);
      this.user = response.data.user;
      this.loggedIn = true;
      this.userNow = response.data.user.username;
      localStorage.setItem('token', JSON.stringify(response.data.token));


      }.bind(this));
    }

//LOG OUT FUNCTION - removes token from local storage and resets Log In button
  this.logOut = function(){
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.userNow = undefined;
    this.user = {};
  }

  this.register = function(regForm){
    console.log(regForm.username);
    console.log(regForm.password);
    $http({
      method: 'POST',
      url: this.url + '/users',
      data: {user: {username: regForm.username, password: regForm.password, email: regForm.email, name: regForm.name, address: regForm.address, city: regForm.city, state: regForm.state, zip: regFrom.zip}}
    }).then(
      function(response){
        console.log(response);


      }.bind(this)
    );
  }

//CREATE TRANSACTION CALL
  this.createTrans = function(product_id){
    console.log('Creating Trans');
    console.log(product_id);
    console.log(this.user.id);
    $http({
      method: 'POST',
      url: this.url + '/transactions',
      headers: {'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))},
      data: {transaction: {user_id: this.user.id, product_id: product_id}}
    }).then(
      function(response){
        console.log(response);
        this.currentTrans = response.data.id
      }.bind(this)
    );
  }

//SHOW TRANSACTION CALL
  this.showTrans = function(){
    console.log(this.currentTrans)
    $http({
      method: 'GET',
      url: this.url + '/transactions/' + this.currentTrans,
      headers: {'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))}
    }).then(
      function(response){
        console.log(response);
      }
    )
  }

//ADD PRODUCT TO TRANSACTION CALL








}]);
