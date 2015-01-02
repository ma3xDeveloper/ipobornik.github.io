 adsApp.factory("adsData", function($resource) {

     var resource = $resource("/app/data/:id", {
         id: "@id"
     })

     return {
         getAd: function(id) {
             return resource.get({
                 id: id
             });

         },
         saveAd: function(ad) {
             ad.id = 55;
             console.log(ad);
             resource.save(ad);
         }

     }


 });
