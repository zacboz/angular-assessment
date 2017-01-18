// angular.module('assessment').directive('product', function(mainService){
//   return {
//     restrict: 'AE',
//     scope: {
//       item: '='
//     },
//     templateUrl: './views/product-tmpl.html',
//     controller: function($scope){
//       mainService.getProducts().then(function(response){
//         console.log(response);
//         $scope.products = response.data;
//         console.log(response.data);
//       });
//     }
//   }
// });
