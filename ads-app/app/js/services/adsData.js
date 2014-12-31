 adsApp.factory("adsData", function($http) {

     return {
         getAd: function(id, successcb) {
             $http({
                     method: "GET",
                     url: "/app/data/" + id
                 })
                 .success(function(data, status, headers, confic) {
                     successcb(data);
                     /*TODO LOGS*/
                 })
                 .error(function(data, status, headers, confic) {
                     /*TODO LOGS*/
                 });
         }

     }


 });
