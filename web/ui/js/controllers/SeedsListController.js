angular.module('myApp').controller('SeedsListController', function($log) {
    
    console.log('seeds list controller loaded');
    
    var that = this;
    var item = this.item = {};
    
    this.save = function(){
        
        
        $log.log(item);
        
        
    };
    
});

