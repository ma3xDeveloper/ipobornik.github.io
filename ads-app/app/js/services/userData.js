 adsApp.factory("userData", function($resource, baseServiceUrl, avtent) {

     function registerUser(user) {
         return $resource(baseServiceUrl + "user/register")
             .save(user)
             .$promise
             .then(function(data) {
                 avtent.saveUser(data);
             });
     }

     function loginUser(user) {
         var resource = $resource(baseServiceUrl + "user/login")
             .save(user);
             
         resource.$promise
             .then(function(data) {
                 avtent.saveUser(data);
             });

         return resource;
     }

     function logOutUser() {
         return $resource(baseServiceUrl + "user/logout")
             .save(user)
             .$promise
             .then(function(data) {
                 avtent.removeUser();
             });
     }

     return {
         register: registerUser,
         login: loginUser,
         logout: logOutUser
     };


 });
