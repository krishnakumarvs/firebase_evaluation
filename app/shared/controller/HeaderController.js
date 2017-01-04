(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
    /**
     * Header Controller.
     */
    .controller('HeaderController', Header);

    Header.$inject = ['$state'];

    function Header($state) {
        var headerVm = this;
        headerVm.goToPage = goToPage;

        function goToPage(pageNo) {
            switch (pageNo) {
                case 1:
                    
                    break;
                case 2:
                    
                    break;

                case 3:
                    
                    break;
                case 4:
                    
                    break;
                case 5:
                    
                    break;
                case 6:
                    
                    break;
                default:
                    $state.go('header.tasks')
            }
        }
    }
})();