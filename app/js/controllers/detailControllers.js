/**
 * Created by 79987 on 2016/12/27.
 */
var blog = require('../app');
blog
    .config(["$routeProvider",function($routeProvider) {

        $routeProvider.when('/article/:id', {
            template : require('../../templates/detail_article.html'),
            controller : 'detailArticleController'
        }).when('/problem/:id', {
            template : require('../../templates/detail_article.html'),
            controller : 'detailProblemController'
        }).when('/image/:id', {
            template : require('../../templates/detail_image.html'),
            controller : 'detailImageController'
        }).when('/share/:id', {
            template : require('../../templates/detail_article.html'),
            controller : 'detailShareController'
        });

    }]);



angular.module('detailControllers', [])
    .controller('detailArticleController',['$scope',function($scope) {

    }]).controller('detailProblemController',['$scope',function($scope) {

}]).controller('detailImageController',['$scope',function($scope) {

}]).controller('detailShareController',['$scope',function($scope) {

}]);




