angular.module('myApp').controller('AreaDetailController', function(config, areasResourceService) {
    console.log('area controller loaded', config);
    
    var that = this;
    this.item = {};
    
    this.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    this.test = areasResourceService.query();
    
    this.save = function(){
        
    };
    
});

