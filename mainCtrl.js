angular.module('assessment')
.controller('mainCtrl', ['$scope', 'mainService', '$stateParams', '$state', function($scope, mainService, $stateParams, $state){

    mainService.getProducts().then(function(response){
      $scope.products = response.data;
      console.log(response.data);
    });

    if ($stateParams){
      mainService.getDetails($stateParams.id).then(function(response){
      console.log($stateParams.id);
      $scope.detail = response.data;
      console.log($scope.detail);
      });
    };
}])
.directive('shopping', function(){
  return {
    restrict: 'AE',
    scope: {
      item: '='
    },
    templateUrl: './views/product-tmpl.html'
  };
});
