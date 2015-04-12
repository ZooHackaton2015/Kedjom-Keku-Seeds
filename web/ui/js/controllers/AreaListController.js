angular.module('myApp').controller('AreasController', function() {
    console.log('area controller loaded');
    
    var that = this;
    var item = this.item = {};
    
    this.save = function(){
        

        //vytvorit ctverec z lokace 100m x 100m (hektar)
        
        item.latitude; 
        
        item.longtitude;
        
        
        $http.post('/someUrl', {msg:'saving area!'}).
            success(function( item, status, headers, config) {
              // this callback will be called asynchronously
              // when the response is available
              
              
              
            }).
            error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              
            });
        
    };
    
});

