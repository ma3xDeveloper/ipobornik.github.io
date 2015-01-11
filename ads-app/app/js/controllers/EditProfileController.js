 adsApp.controller("EditProfileController",
     function EditProfileController($scope, $location, userData, notifyService) {

        userData.loadProfile()
             .$promise
             .then(function(data) {
                 notifyService.popUpSuccsessMessages("The User Profile is loadet successfully");
                 $scope.userProfileData = data;
             }, function(serverError) {
                 notifyService.popUpErrorMessageWithRestError("ERROR!", serverError);
             });


              $scope.publishEditedProfileToServer = function(editProfileObj) {
                console.log(editProfileObj);
             userData.editProfile(editProfileObj)
                 .$promise
                 .then(function() {
                     notifyService.popUpSuccsessMessages("The Profile EDITED successfully");
                     $location.path("/editprofile");
                 }, function(serverError) {
                     notifyService.popUpErrorMessageWithRestError("ERROR!", serverError);
                 });
         };


     });
