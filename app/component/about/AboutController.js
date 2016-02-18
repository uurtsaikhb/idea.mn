/**
 * Created by uurtsaikh on 2/13/16.
 */

(function () {

    function AboutController() {
        this.title = 'This is about page.';
    };

    angular
        .module('app.about', [])
        .controller('AboutController', AboutController)

})();
