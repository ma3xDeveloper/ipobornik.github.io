 adsApp.factory("adsData", function($resource) {

 	var resource = $resource("/app/data/:id", {id: "@id"})

     return {
         getAd: function(id) {
         	return resource.get({id: id});
          
         }

     }


 });
