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
    function($scope) {
        var FullPage = require('../lib/fullPage');
        $scope.$on('$viewContentLoaded', function() {
            var runPage;

            runPage = new FullPage({

                id : 'pageContain',                            // id of contain
                slideTime : 800,                               // time of slide
                continuous : false,                            // create an infinite feel with no endpoints
                effect : {                                     // slide effect
                    transform : {
                        translate : 'Y',				   // 'X'|'Y'|'XY'|'none'
                        scale : [1, 1],				   // [scalefrom, scaleto]
                        rotate : [0, 0]				       // [rotatefrom, rotateto]
                    },
                    opacity : [0, 1]                       // [opacityfrom, opacityto]
                },
                mode : 'wheel,touch,nav:navBar',               // mode of fullpage
                start : 0,                                     // which page will display when install
                easing : 'ease'                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
                //  ,onSwipeStart : function(index, thisPage) {   // callback before pageChange
                //    return 'stop';
                //  }
                //  ,beforeChange : function(index, thisPage) {   // callback before pageChange
                //    return 'stop';
                //  }
                //  ,callback : function(index, thisPage) {       // callback when pageChange
                //    alert(index);
                //  };
            });

        });


    });




