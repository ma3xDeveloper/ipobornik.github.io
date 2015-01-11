 adsApp.factory("userData", function($resource, baseServiceUrl, authent) {

     function registerUser(user) {
         var resource = $resource(baseServiceUrl + "user/register")
             .save(user);

             resource.$promise
             .then(function(data) {
                 authent.saveUser(data);
             });
     }

     /*
      function registerUser(ad) {
              var adsResource = $resource(
                  baseServiceUrl + 'user/register',
                  null, {
                      'publishAd': {
                          method: 'POST',
                          data: ad
                      }
                  }
              );

              return adsResource.publishAd(ad);
          }*/


     function loginUser(user) {
         var resource = $resource(baseServiceUrl + "user/login")
             .save(user);

         resource.$promise
             .then(function(data) {
                 authent.saveUser(data);
             });

         return resource;
     }

     function logOutUser(key) {
         /*         return $resource(baseServiceUrl + "user/logout")
          */
         authent.removeUser(key);

     }

     function loadProfile() {
         var user = authent.getUserData();
         var adsResource = $resource(
             baseServiceUrl + '/user/profile',
             null, {
                 'getUserProfile': {
                     method: 'GET',
                     headers: {
                         Authorization: 'Bearer ' + user.access_token
                     }
                 }
             }
         );

         return adsResource.getUserProfile();
     }

     function editProfile(profile) {
         var user = authent.getUserData();

         var adsResource = $resource(
             baseServiceUrl + 'user/profile',
             null, {
                 'publishNewProfile': {
                     method: 'PUT',
                     headers: {
                         Authorization: 'Bearer ' + user.access_token
                     },
                     data: profile
                 }
             }
         );

         return adsResource.publishNewProfile(profile);
     }

     return {
         registerUser: registerUser,
         login: loginUser,
         logOutUser: logOutUser,
         loadProfile: loadProfile,
         editProfile: editProfile
     };


 });
