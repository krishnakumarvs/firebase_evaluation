(function() {
    'use strict';

    /**
     * Get Shared module.
     */
    angular.module(appName)

    /**
     * Add task data service.
     */
    .factory('TaskDataService', TaskDataService)

    .factory('TaskClientDataService', TaskClientDataService)

    .factory('TaskPersistenceDataService', TaskPersistenceDataService);

    TaskDataService.$inject = ['TaskClientDataService', 'TaskPersistenceDataService'];

    function TaskDataService(TaskClientDataService, TaskPersistenceDataService) {
        var taskDataService = {
            storeTaskDetails: storeTaskDetails,
            getCompany: getCompany
        };
        return taskDataService;

        function storeTaskDetails(taskDetails) {
            return TaskClientDataService.storeTaskDetails(taskDetails);
        }

        function getCompany() {
            return TaskPersistenceDataService.getCompany();
        }
    }

    TaskClientDataService.$inject = ['$q', 'config'];

    function TaskClientDataService($q, config) {
        var taskClientDataService = {
            storeTaskDetails: storeTaskDetails
        };
        return taskClientDataService;

        function storeTaskDetails(taskDetails) {
            var defer = $q.defer();
            defer.resolve(true);
            return defer.promise;
        }
    }

    TaskPersistenceDataService.$inject = ['$q', 'config'];

    function TaskPersistenceDataService($q, config) {
        var newTaskPersistenceDataService = {
            getCompany: getCompany
        };
        return newTaskPersistenceDataService;

        function getCompany() {
            var defer = $q.defer();
            //defer.resolve("kakes");
            var database = firebase.database().ref("companies");
            var company = database.orderByChild("name").equalTo("TCS");
            var query = company;
            //var query = company.orderByChild("since").equalTo("1991");;
            //query = company.equalTo(null);
            
            query.once("value", function(dataFetch) {
                //console.log(dataFetch.val());
                defer.resolve(dataFetch.val());
            }, function(error) {
                console.log(error);
            });
            return defer.promise;
        }
    }
})();