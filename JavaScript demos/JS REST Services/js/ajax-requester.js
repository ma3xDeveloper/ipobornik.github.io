var ajaxRequester = (function() {
    var makeRequest = function makeRequest(method, url, data, success, error) {
        return $.ajax({
            url: url,
            type: method,
            headers: {
                "X-Parse-Application-Id": "I5FyDdVnfUD9VC5BJpJkOjRCiMeuKzsyUi7eVQlx",
                "X-Parse-REST-API-Key": "FDU1wKGoEhWxLpKsvifDZwbgNBXeVGhcSMDBuQZh"
            },
            contentType: "application/json",
            data: JSON.stringify(data),
            success: success,
            error: error
        });
    };

    function makeGetRequest(url, success, error) {
        return makeRequest("GET", url, null, success, error);
    }


    function makePostRequest(url, data, success, error) {
        return makeRequest("POST", url, data, success, error);
    }

    function makePutRequest(url, data, success, error) {
        return makeRequest("PUT", url, data, success, error);
    }

    function makeDeleteRequest(url, success, error) {
        return makeRequest("DELETE", url, {}, success, error);
    }

    return {
        get: makeGetRequest,
        post: makePostRequest,
        put: makePutRequest,
        delete: makeDeleteRequest
    };
}());
