(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Task Page Controller.
         */
        .controller('HomePageController', Home);

    Home.$inject = ['$state', '$firebaseObject', 'TaskDataService'];

    function Home($state, $firebaseObject, TaskDataService) {
        var tasksVm = this;
        tasksVm.GotoViewTask = GotoViewTask;
        tasksVm.addUser = addUser;
        tasksVm.addCompany = addCompany;
        tasksVm.getCompany = getCompany;
        var database;


        activate();

        function activate() {
            database = firebase.database().ref();
        }

        function addUser() {
            var sampleUser = {
                name: "Rohit",
                age: 20,
                date: new Date() + ""
            }
            var userDb = database.child("users");
            userDb.push(sampleUser);
            console.log("Pushed");
        }

        function GotoViewTask() {

        }

        function addCompany() {
            var sampleCompany = {
                name: "Vipro",
                since: 1991,
                date: new Date() + ""
            }
            var companyDb = database.child("companies");
            companyDb.push(sampleCompany);
            console.log("Pushed");
        }

        function getCompany() {
            TaskDataService.getCompany().then(function(result) {
                console.log(result);
            });
        }
    }
})();