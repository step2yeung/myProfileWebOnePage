angular
.module('app', [
    'ui.router'
])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.html',
          controller: 'MainCtrl'
        });
    
    $stateProvider
        .state('about', {
          url: '/about',
          templateUrl: 'about.html'
        });
}])

