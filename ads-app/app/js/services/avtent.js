 adsApp.factory("avtent", function() {
     var key = "user";

     function saveUserData(data) {
         //localStorageServiceProvider.set(key, data);
         localStorage.setItem(key, angular.toJson(data));
     }

     function getUserData() {
         //localStorageServiceProvider.get(key);
         return angular.fromJson(localStorage.getItem(key));
     }

     function getHeaders() {
         var headers = {};
         var userData = getUserData();
         if (userData) {
             headers.Authorization = "Bearer " + getUserData().access_token;

         }

         return headers;
     }

     function removeUser() {
         localStorage.removeItem(key);
     }

     function isAdmin() {
         var isAdmin = getUserData().isAdmin;
         return isAdmin;
     }

     function isLoggedIn() {

         // "!!" converts to boolean
         return !!getUserData();
     }

     return {
         saveUser: saveUserData,
         getUser: getUserData,
         getHeaders: getHeaders,
         removeUser: removeUser,
         isAdmin: isAdmin,
         isLoggedIn: isLoggedIn
     };


 });
