 adsApp.factory("adsData", function($http, $q) {

     return {
         getAd: function(id) {

         	var defer = $q.defer();
             $http({
                     method: "GET",
                     url: "/app/data/" + id
                 })
                 .success(function(data, status, headers, confic) {
                    defer.resolve(data);
                 })
                 .error(function(data, status, headers, confic) {
                    defer.reject(data);
                 });

            return defer.promise;     
         }

     }


 });
