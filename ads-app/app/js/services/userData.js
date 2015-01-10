 adsApp.factory("userData", function($resource, baseServiceUrl, authent) {

     function registerUser(user) {
         return $resource(baseServiceUrl + "user/register")
             .save(user)
             .$promise
             .then(function(data) {
                 authent.saveUser(data);
             });
     }

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

     return {
         register: registerUser,
         login: loginUser,
         logOutUser: logOutUser
     };


 });
