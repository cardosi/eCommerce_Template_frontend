
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

app.controller('controller1', function() {

});

app.controller('controller2', function() {

});

app.controller('controller3', ['$routeParams', function($routeParams) {
  this.id = $routeParams.id;
}]);

app.controller('controller4', ['$routeParams', function($routeParams) {
  this.id = $routeParams.id;
}]);

app.controller('controller5', ['$routeParams', function($routeParams) {
  this.id = $routeParams.id;
}]);

app.controller('controller6', function() {

});


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5mode({ enabled: true });

  $routeProvider.when('/logIn', {
    templateUrl: 'partials/partial1.html',
    controller: 'controller1',
    controllerAs: 'ctrl1'
  });

  $routeProvider.when('/register', {
    templateUrl: 'partials/partial2.html',
    controller: 'controller2',
    controllerAs: 'ctrl2'
  });

  $routeProvider.when('/cart/:id', {
    templateUrl: 'partials/partial3.html',
    controller: 'controller3',
    controllerAs: 'ctrl3'
  });

  $routeProvider.when('/account/:id', {
    templateUrl: 'partials/partial4.html',
    controller: 'controller4',
    controllerAs: 'ctrl4'
  });

  $routeProvider.when('/products/:id', {
    templateUrl: 'partials/partial5.html',
    controller: 'controller5',
    controllerAs: 'ctrl5'
  });

  $routeProvider.when('/info', {
    templateUrl: 'partials/partial6',
    controller: 'controller6',
    controllerAs: 'ctrl6'
  });
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);
