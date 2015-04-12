angular.module('myApp').controller('SeedsListController', function($log, seedResourceService) {
    
    console.log('seeds list controller loaded');
    
    //get from fusion tables
    
    seedResourceService.getAll(function (seeds){

        this.columns = seeds.columns;
        this.rows = seeds.rows;

        //to ng grid 

        $log.log( seeds );
        $log.log( this.columns );
        $log.log( this.rows );
        
    } );
   
    
    
    
});

