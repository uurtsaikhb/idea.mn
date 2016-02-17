/**
 * Created by uurtsaikh on 2/13/16.
 */

(function () {

    var AboutController = function ($scope) {
        $scope.title = 'This is about page.';
    };

    angular
        .module('app.about', [])
        .controller('AboutController', ['$scope', AboutController])

})();
