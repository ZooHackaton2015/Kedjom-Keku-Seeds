'use strict';

myApp.factory('config', function() {
    return {
        baseUrl: 'https://www.googleapis.com/fusiontables/v2/',
        apiKey: 'AIzaSyDifK82ApYObrQZJRXmJp6nxqTem6yjrlY'
    }
})

myApp.factory('areasResourceService', function(config, $resource) {   
    var tableId = '16zyilWrVedmB0D7WkFulJxPjxb1Fav3tZsNdN2dK';
    
    var res = $resource(config.baseUrl, {
        //expecting someting like https://www.googleapis.com/fusiontables/v2/query?sql=SELECT * FROM 1KxVV0wQXhxhMScSDuqr-0Ebf0YEt4m4xzVplKd4&
        query: {method: 'GET', url: config.baseUrl + 'query'},
        saveNew: {method: 'POST', url: config.baseUrl + 'insert'},
        save: {method: 'POST', url: config.baseUrl + 'update'}
    });
    return res;    
})

myApp.factory('seedResourceService', function(config, $resource) {    
    var res = $resource(config.baseUrl, {
        //expecting someting like https://www.googleapis.com/fusiontables/v2/query?sql=SELECT * FROM 1KxVV0wQXhxhMScSDuqr-0Ebf0YEt4m4xzVplKd4&
        query: {method: 'GET', url: config.baseUrl + 'query'}
    });
    return res;    
})

// simple stub that could use a lot of work...
myApp.factory('RESTService',
    function ($http) {
        return {
            get:function (url, callback) {
                return $http({method:'GET', url:url}).
                    success(function (data, status, headers, config) {
                        callback(data);
                        //console.log(data.json);
                    }).
                    error(function (data, status, headers, config) {
                        console.log("failed to retrieve data");
                    });
            }
        };
    }
);


// simple auth service that can use a lot of work... 
myApp.factory('AuthService',
    function () {
        var currentUser = null;
        var authorized = false;

        // initMaybe it wasn't meant to work for mpm?ial state says we haven't logged in or out yet...
        // this tells us we are in public browsing
        var initialState = true;

        return {
            initialState:function () {
                return initialState;
            },
            login:function (name, password) {
                currentUser = name;
                authorized = true;
                //console.log("Logged in as " + name);
                initialState = false;
            },
            logout:function () {
                currentUser = null;
                authorized = false;
            },
            isLoggedIn:function () {
                return authorized;
            },
            currentUser:function () {
                return currentUser;
            },
            authorized:function () {
                return authorized;
            }
        };
    }
);