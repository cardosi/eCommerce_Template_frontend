
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
  });
}



}]);
