/**
 * Created by Administrator on 2016/12/18.
 */
var blog = require('../app');
blog
    .config(function($routeProvider) {

        $routeProvider.when('/', {
            template : require('../../templates/index.html'),
            controller : 'indexController'
        }).otherwise({
            template : require('../../templates/index.html'),
            controller : 'indexController'
        });

    });



angular.module('blog.indexControllers', []).controller('indexController',
    function() {

    });




