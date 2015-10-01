
angular.module('myApp', ["ngRating", "ngAnimate"])
angular.module('myApp').controller('homeButton', function ($scope) {
    $scope.ratings	=[1, 2, 3, 4, 5]
    $scope.button1 =false
    $scope.page1=true
    $scope.page2=false
    $scope.page3=false
    $scope.pageAnimIn=false
     
   
    $scope.resorts=[
    {
        name: "Arapahoe Basin",
        ratings: 0,
        maps: ["maps/abasin.png", "maps/montezumabowl.png"],
        weather: "wi wi-rain", 
        temp: 42
    },

    {
        name: "Winter Park",
        ratings:0,
        maps: ["maps/winterpark.png"],
        weather: "wi wi-snow",
        temp: 0
    },


    {
        name:"Copper" ,
        ratings:0 ,
        maps: ["maps/copper mountain1.png", "maps/copper mountain2.png"],
        weather: "wi wi-fire",
        temp: 99

},
  {
        name:"Brekinridge" ,
        ratings:0 ,
        maps: ["maps/brek.png"],
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
        maps: ["maps/VailTrailMapBack.png", "maps/VailTrailMapFront.png"], 
        weather: 0
    },

    {
        name:"Steamboat" ,
        ratings:0 ,
        maps: ["maps/SteamboatT.png"] ,
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
        maps: ["maps/eldora.png"] ,
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
        maps: ["maps/northview.png", "maps/southview.png"],
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
        maps: ["maps/telluride.png"] ,
        weather: 0
    },
           {
        name:"Crested Butte" ,
        ratings:0 ,
        maps: ["maps/crestedbutte.png"],
        weather: 0
    },
           {
        name:"Silverton" ,
        ratings:0 ,
        maps: ["maps/silverton.png"] ,
        weather: 0
    },
           {
        name:"Wolf Creek" ,
        ratings:0 ,
        maps: ["maps/wolf.png"],
        weather: 0
    },
           {
        name:"Purgatory",
        ratings:0 ,
        maps: ["maps/purgatory.png"],
        weather: 0
    }
    ]
   // This is an attempt to take rating and put them in to strings for page 2
    // $scope.conditions =[

    //     {
    //     1: "Shitty"
    // }, 
    //     {
    //     2:"Not Great"
    // }. {"Good"}, {"Amazing"}, {"The Best Ever"}]


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
    
        $scope.page1 = false
        $scope.page2 = true
        $scope.page3= false
      }

    $scope.navpage3 = function($event){
        $scope.page1 = false
        $scope.page2 = false
        $scope.page3 = true 
    }

    } )

 
    

// function myIP() {
//     if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
//     else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

//     xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
//     xmlhttp.send();

//     hostipInfo = xmlhttp.responseText.split("\n");

//     for (i=0; hostipInfo.length >= i; i++) {
//         ipAddress = hostipInfo[i].split(":");
//         if ( ipAddress[0] == "IP" ) return ipAddress[1];
//     }

//     return false; 
//     console.log(false)
// }
   	
