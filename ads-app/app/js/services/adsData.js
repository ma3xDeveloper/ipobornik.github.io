 adsApp.factory("adsData", function($resource, $http, authent, baseServiceUrl) {

     var resource = $resource(baseServiceUrl + "ads:adsId", {
         adsId: "@id"
     }, {
         update: {
             method: "PUT"
         }
     });


     function getPublicAdsWithParams(filterParams) {
         return resource.get(filterParams);
     }

     /*  function getPublicAdsWithOUTParams() {
           var url = baseServiceUrl + 'ads?CategoryId=' + "" +
               '&TownId=' + "" +
               '&StartPage=' + 1 +
               '&PageSize=' + 2;
           return $resource(url).get();
       }*/

     function getUserAds() {
         var user = authent.getUserData();
         var adsResource = $resource(
             baseServiceUrl + '/user/ads',
             null, {
                 'getAll': {
                     method: 'GET',
                     headers: {
                         Authorization: 'Bearer ' + user.access_token
                     }
                 }
             }
         );

         return adsResource.getAll();
     }


     function editAd(ad, id) {
         var user = authent.getUserData();

         var adsResource = $resource(
             baseServiceUrl + 'user/ads/' + id,
             null, {
                 'publishAd': {
                     method: 'PUT',
                     headers: {
                         Authorization: 'Bearer ' + user.access_token
                     },
                     data: ad
                 }
             }
         );

         return adsResource.publishAd(ad);
     }



     /* function editAd(adId, ad) {
          return resource.update({
              id: adId
          }, ad);
      }*/
     /*
          function getAdById(adId) {
              return resource.get({
                  id: adId
              });
          }*/

     function getAdById(id) {
         var user = authent.getUserData();
         var adsResource = $resource(
             baseServiceUrl + '/user/ads/' + id,
             null, {
                 'getMyAd': {
                     method: 'GET',
                     headers: {
                         Authorization: 'Bearer ' + user.access_token
                     }
                 }
             }
         );

         return adsResource.getMyAd();
     }


     /* function postAd(ad) {
          return resource.save(ad);
      }*/

     function postAd(ad) {
         var user = authent.getUserData();

         var adsResource = $resource(
             baseServiceUrl + 'user/ads',
             null, {
                 'publishAd': {
                     method: 'POST',
                     headers: {
                         Authorization: 'Bearer ' + user.access_token
                     },
                     data: ad
                 }
             }
         );

         return adsResource.publishAd(ad);
     }


     function deleteAd(adId) {
         return resource.delete({
             id: adId
         });
     }

     return {
         getPublicAdsWithParams: getPublicAdsWithParams,
         getUserAds: getUserAds,
         editAd: editAd,
         getAdById: getAdById,
         postAd: postAd,
         deleteAd: deleteAd
     };
 });
