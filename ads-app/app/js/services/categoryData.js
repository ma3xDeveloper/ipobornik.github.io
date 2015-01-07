 adsApp.factory("categoryData", function($resource, baseServiceUrl) {

     var resource = $resource(baseServiceUrl + "categories");

     function getCategories() {
     	return resource.query();
     }

     return {
         getCategories: getCategories

     };


 });
    