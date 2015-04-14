angular.module('myApp').controller('SeedsListController', function($log, $scope,seedResourceService) {
    
    console.log('seeds list controller loaded');
    
    //get from fusion tables
    
    seedResourceService.getAll(function (seeds){

    //this means that properties is in vm (view-model property)
        this.columns = seeds.columns;
        this.rows = seeds.rows;
        
        scope = $scope;
        
        $scope.columns = seeds.columns;
        $scope.rows = seeds.rows;

        //to ng grid 
        
        this.log = $log;

        $log.log( seeds );
        $log.log( this.columns );
        $log.log( this.rows );
        
    } );
   
    
    
    
});

