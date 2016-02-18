(function () {

    function HeaderController($state) {

        var header = this;
        header.$state = $state;
    };

    angular
        .module('app.header', [])
        .controller('HeaderController', ['$state', HeaderController])

})();