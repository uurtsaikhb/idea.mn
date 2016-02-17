(function () {

    var HomeController = function ($scope, $state) {
        $scope.$state = $state;
    };

    angular
        .module('app.header', [])
        .controller('HeaderController', ['$scope', '$state', HomeController])

})();