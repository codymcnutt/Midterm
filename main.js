
angular.module('myApp', ["ngRating"])
angular.module('myApp').controller('homeButton', function ($scope) {
    $scope.snowss = []
    $scope.ratings	=[1, 2, 3, 4, 5]
    $scope.rating =0
    $scope.button1 =false
    $scope.page1=true
    $scope.page2=false
    $scope.page3=false
    $scope.resorts=[
    {
        name: "Arapahoe Basin",
        ratings: 0 ,
        maps: "test of a map",
        weather: 0
    },

    {
        name: "Winter Park",
        ratings:0,
        maps: "test of other maps",
        weather: 0
    },


    {
        name:"Copper" ,
        ratings:0 ,
        maps: "This is maps", 
        weather: 0

},
      {
        name:"Keystone" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },

    {
        name:"Vail" ,
        ratings:0 ,
        maps: "This is maps", 
        weather: 0
    },

    {
        name:"Steamboat" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },

    {
        name:"Cortez" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },

    {
        name:"Eldora" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },

      {
        name:"Ski Grandby Ranch" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },

      {
        name:"Aspen Highlands" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },

      {
        name:"Loveland" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },

      {
        name:"Buttermilk" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },
       {
        name:"Buttermilk" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },
       {
        name:"Monarch" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },
       {
        name:"Sunlight" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },

        {
        name:"Powderhorn" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },
           {
        name:"Telluride" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },
           {
        name:"Crested Butte" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },
           {
        name:"Silverton" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },
           {
        name:"Wolf Creek" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    },
           {
        name:"Purgatory" ,
        ratings:0 ,
        maps: "This is maps" ,
        weather: 0
    }
    ]
   


    $scope.location = []


    $scope.homeMenu = function($event){
                 // $scope.snows.push(snows.rating)   
    		
    		}
           
		

    $scope.click = function($event){
        $scope.button1 = !$scope.button1
        $scope.button1= true

    }
      $scope.navpage1 = function($event){
        $scope.page1 = true
        $scope.page2 = false
        $scope.page3= false
    }
    $scope.navpage2 = function($event){
        $scope.snowss.push($scope.snowss.rating)
        $scope.page1 = false
        $scope.page2 = true
        $scope.page3= false
    }
    $scope.navpage3 = function($event){
        $scope.page1 = false
        $scope.page2 = false
        $scope.page3 = true 
    }

       $scope.location =function($event){

       } 

    } )


    
  
   	
