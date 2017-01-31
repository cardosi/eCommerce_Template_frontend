(function(){
  angular.module('ecommerceStore', ['ui.router']).config(AuthRouter);

  function AuthRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/index");

    $stateProvider
    .state('home', {
      url: '/',
      params: {
        user:null
      }
    })
    .state('cart', {
      url: '/cart/id', //might need to grab user id or auth variable here
      templateUrl: '/partials/cart.html',
    })
    .state('account', {
      url: '/account/id', //again might need to involve user verification
      templateUrl: '/partials/account.html',
    })
    .state('allProducts', {
      url: '/products',
      templateUrl: '/partials/products_all.html',
    })
    .state('productsShow', {
      url: '/product/id',
      templateUrl: 'partials/single_product.html'
    })
  }
})()
