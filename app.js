angular.module('assessment', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
                  .state('home',{
                      url:'/',
                      templateUrl: "./views/home.html"
                  })
                  .state('shop',{
                      url:'/shop',
                      templateUrl: './views/shop.html',
                      controller: 'mainCtrl'
                  })
                  .state('blog',{
                      url:'/blog',
                      templateUrl: './views/blog.html'
                  })
                  .state('about',{
                      url:'/about',
                      templateUrl: './views/about.html'
                  })
                  .state('details',{
                      url:'/detail/:id',
                      templateUrl: './views/product-details.html',
                      controller: 'mainCtrl'
                  });



              $urlRouterProvider
                  .otherwise('/');

});
