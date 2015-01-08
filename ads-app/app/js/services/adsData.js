 adsApp.factory("adsData", function($resource, baseServiceUrl) {

     var resource = $resource(baseServiceUrl + "ads:adsId", {
         adsId: "@id"
     }, {
         update: {
             method: "PUT"
         }
     });


     function getPublicAds(filterParams) {
         return resource.get(filterParams);
     }

     function editAd(adId, ad) {
         return resource.update({
             id: adId
         }, ad);
     }

     function getAdById(adId) {
         return resource.get({
             id: adId
         });
     }

     function postAd(ad) {
         return resource.save(ad);
     }

     function deleteAd(adId) {
         return resource.delete({
             id: adId
         });
     }

     return {
         getPublicAds: getPublicAds,
         editAd: editAd,
         getAdById: getAdById,
         postAd: postAd,
         deleteAd: deleteAd
     };
 });
