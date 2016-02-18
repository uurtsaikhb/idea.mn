/**
 * Created by uurtsaikh on 2/13/16.
 */

(function () {

    function HomeController($http) {
        var home = this;
        home.title = "This is a home page";

        $http.get('app/api/user.json').then(function(response) {
            home.users = response.data;
        });
    };


    angular.module('app.home', [])
        .controller('HomeController', ['$http', HomeController])

})();
