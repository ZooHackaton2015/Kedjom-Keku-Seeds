angular.module('myApp').controller('AreaDetailController', function(config, areasResourceService) {
    console.log('area controller loaded', config);
    
    var that = this;
    this.item = {};
    
    this.test = areasResourceService.query();
    
    this.save = function(){
        
    };
    
});

