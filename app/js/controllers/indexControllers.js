/**
 * Created by Administrator on 2016/12/18.
 */
var blog = require('../app');
blog
    .config(["$routeProvider",function($routeProvider) {

        $routeProvider.when('/', {
            template : require('../../templates/index.html'),
            controller : 'indexController'
        }).when('/article', {
            template : require('../../templates/list_article.html'),
            controller : 'articleController'
        }).otherwise({
            template : require('../../templates/index.html'),
            controller : 'indexController'
        });

    }]);



angular.module('blog.indexControllers', [])
    .controller('indexController',['$scope','$location',function($scope,$location) {

        $scope.img1={
            "background":"url("+require("../../assets/img/thumbnail/mountain.png")+") no-repeat",
            "background-size":"100% 100%"
        }

        $scope.img2={
            "background":"url("+require("../../assets/img/thumbnail/bye.png")+") no-repeat",
            "background-size":"100% 100%"
        }

        $scope.img3={
            "background":"url("+require("../../assets/img/thumbnail/cloud.png")+") no-repeat",
            "background-size":"100% 100%"
        }

        $scope.img4={
            "background":"url("+require("../../assets/img/thumbnail/lu.png")+") no-repeat",
            "background-size":"100% 100%"
        }
        $scope.go = function ( path ) {
            $location.path( path );
        };

    }]).controller('articleController',['$scope','$location',function($scope,$location) {


        $scope.go = function ( path ) {
            $location.path( path );
        };

    }]);




