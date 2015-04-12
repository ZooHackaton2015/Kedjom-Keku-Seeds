angular.module('myApp').controller('AreaDetailController', function($scope, config, areasResourceService) {
    
    var that = this;
    this.item = {Location: '6.06282, 10.2945', _latitude: 6.06282, _longitude: 10.2945}; //todo load from server
        
    this.map = { center: { latitude: 6.06282, longitude: 10.2945 }, zoom: 8 }; //Cameroon
    this.test = areasResourceService.query();
    
    this.save = function(){
        var location = that.item._latitude + ',' + that.item._longitude;
        
        that.item.Location = location;
        
        areasResourceService.save(that.item, function() {
            alert('ok');
        }, function() {
            alert('fail');
        });
    };
    
    $scope.$watch(angular.bind(this, function () {
        return this.item._latitude; // `this` IS the `this` above!!
      }), function (newVal, oldVal) {
        updateMap();
      });
      
      $scope.$watch(angular.bind(this, function () {
        return this.item._longitude; // `this` IS the `this` above!!
      }), function (newVal, oldVal) {
        updateMap();
      });
    
    updateMap = function() {
        var center = getCenter();
        that.map.center = center;
    }
    
    function getCenter(){
        return {latitude: that.item._latitude, longitude: that.item._longitude};
    }
   
    this.getCenter = function() {
        return getCenter();
    }
    
    function getCenterFromLocation(locationString) {
        var data = that.item.Location.split(',');
        return {latitude: data[0], longitude: data[1]};
    }
    
});

