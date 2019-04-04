angular.module('App').config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        template: "<comp1></comp1>"
    })
    .when('/comp1', {
        template: "<comp1><comp1>"
    })
    .when('/comp2', {
        template: "<comp2></comp2>"
    })
    .otherwise( {
        template: "<comp1></comp1>"
    });
}])