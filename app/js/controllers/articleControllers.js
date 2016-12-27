/**
 * Created by 79987 on 2016/12/27.
 */
var blog = require('../app');
blog
    .config(["$routeProvider",function($routeProvider) {

        $routeProvider.when('/article/:id', {
            template : require('../../templates/detail_article.html'),
            controller : 'detailController'
        });

    }]);



angular.module('blog.articleControllers', [])
    .controller('detailController',['$scope',function($scope) {

    }]);




