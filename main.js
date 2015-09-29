
angular.module('myApp', ["ngRating"])
angular.module('myApp').controller('homeButton', function ($scope) {

    $scope.snows = []
    $scope.ratings	=[1, 2, 3, 4, 5]
    $scope.rating =0
    $scope.button1 =false
    $scope.page1=true
    $scope.page2=false
    $scope.page3=false
//     $scope.resorts=[ "ARAPAHOE BASIN", "ELDORA" "SKI GRANBY RANCH" "ASPEN HIGHLANDS" "HOWELSEN"

// "SNOWMASS", "ASPEN MOUNTAIN", "LOVELAND", "STEAMBOAT", "BUTTERMILK"

// "MONARCH", 

// "SUNLIGHT", 

// "COPPER MOUNTAIN", 

// "POWDERHORN", 

// "TELLURIDE", 

// "COOPER", 

// "PURGATORY", 

// "WINTER PARK", 

// "CRESTED BUTTE", 

// "SILVERTON",

// "WOLF CREEK" ]
    $scope.homeMenu = function($event){
                    $scope.snows.push({rating: $scope.rating})
    		
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


function myIP() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
    xmlhttp.send();

    hostipInfo = xmlhttp.responseText.split("\n");

    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }

    return false; 
    console.log(false)
}
   	
