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
        }).when('/problem', {
            template : require('../../templates/list_article.html'),
            controller : 'problemController'
        }).when('/img', {
            template : require('../../templates/list_img.html'),
            controller : 'imgController'
        }).when('/share', {
            template : require('../../templates/list_article.html'),
            controller : 'shareController'
        }).otherwise({
            template : require('../../templates/index.html'),
            controller : 'indexController'
        });

    }]);



angular.module('indexControllers', [])
    .controller('indexController',['$scope',function($scope) {

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



    }]).controller('articleController',['$scope',function($scope) {

        $scope.typeName="文章";
        $scope.typeIcon="fa-newspaper-o";
        $scope.pageClass="list-article-bak";

    }]).controller('problemController',['$scope',function($scope) {

        $scope.typeName="问题";
        $scope.typeIcon="fa-flask";
        $scope.pageClass="list-problem-bak";
    }]).controller('imgController',['$scope',function($scope) {

        $scope.typeName="图片";
        $scope.typeIcon="fa-picture-o";
        $scope.pageClass="image-bak";
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

    }]).controller('shareController',['$scope',function($scope) {

        $scope.typeName="转载";
        $scope.typeIcon="fa-share-alt-square";
        $scope.pageClass="list-problem-bak";
    }]);




