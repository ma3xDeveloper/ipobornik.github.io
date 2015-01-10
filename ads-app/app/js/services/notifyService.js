adsApp.factory("notifyService", function() {

    // Draw messages to User
    function popUpSuccsessMessage(successMsg) {
        noty({
            text: successMsg,
            type: "info",
            layout: "topCenter",
            timeout: 3500
        });
    }

    function popUpErrorMessage(errorMsg) {
        noty({
            text: errorMsg,
            type: "error",
            layout: "topCenter",
            timeout: 3500
        });
    }

    function toShowRestError(msg, serverError) {
        var errMsg = serverError.data.message;
        if (errMsg) {
            popUpErrorMessage(msg + ": " + errMsg);
        } else {
            popUpErrorMessage(msg + ".");
        }
    }

    return {
        popUpSuccsessMessages: popUpSuccsessMessage,
        popUpErrorMessageWithRestError: toShowRestError

    };
});
