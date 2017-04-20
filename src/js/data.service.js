(function() {
  'use strict';
  angular.module('paygap').factory('DataService', DataService);
    function DataService(){
        function apitest(){
            fetch('https://api.commerce.gov/midaas/distribution?state=CA&race=white&agegroup=25-34&sex=male&api_key=Tn5UHqleKzrUyUvxPx3LeaQq7Vd7p2zfeuF82oDo')
            .then(function(data) {
                console.log(data);
            });
        }
        return {apitest: apitest};
    }
}());
