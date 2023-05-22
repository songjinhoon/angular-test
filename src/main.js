// (function () {

//     var app = angular.module('todo', []);

//     app.controller('TodoCtrl', ['$scope', function ($scope) {
//         $scope.todos = [
//             {
//                 title: '요가수련',
//                 completed: false,
//                 createdAt: Date.now()
//             },
//             {
//                 title: '앵귤러 학습',
//                 completed: false,
//                 createdAt: Date.now()
//             },
//             {
//                 title: '운동하기',
//                 completed: true,
//                 createdAt: Date.now()
//             }
//         ];

//         $scope.remove = function (todo) {

//             var index = $scope.todos.findIndex(function (item) {
//                 return item.title === todo.title;
//             });

//             if (index > -1) {

//                 $scope.todos.splice(index, 1);
//             }
//         };

//         $scope.add = function (newTodoTitle) {

//             $scope.todos.push({
//                 title: newTodoTitle,
//                 completed: false,
//                 createdAt: Date.now()
//             });

//             $scope.newTodoTitle = '';

//         }

//     }]);

// })();


(function () {
    var app = angular.module('main', []);

    // app.config(function ($stateProvider) {
    //     $stateProvider
    //         .state('about', {
    //             url:'about',
    //             templateUrl: 'about.html'
    //         })
    // });

})();