angular.module('myApp').controller('SeedsDetailController', function($log) {
    
    console.log('area controller loaded');
    
    var that = this;
    var item = this.item = {};
    
    this.save = function(){
        
        
        $log.log(item);
        
        
        
    };
    
});

