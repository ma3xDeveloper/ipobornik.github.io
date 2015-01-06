 adsApp.factory("townsData", function($resource, baseServiceUrl) {

     var resource = $resource(baseServiceUrl + "towns");

     function getAllTowns() {
     	return resource.query();
     };

     return {
         getTowns: getAllTowns

     };


 });
    