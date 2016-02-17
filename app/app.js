(function () {

    angular
        .module('app', [
            'app.header',
            'app.about',
            'ui.router'
        ])
        .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/component/home/home.html',
                    controller: 'HomeController'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'app/component/about/about.html',
                    controller: 'AboutController'
                })
                .state('profile', {
                    url: '/profile',
                    templateUrl: 'app/component/profile/profile.html'
                })
        }])
})();