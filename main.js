
angular.module('myApp', ["ngRating"])
angular.module('myApp').controller('homeButton', function ($scope) {
    $scope.snows = []
    $scope.ratings	=[1, 2, 3, 4, 5]
    $scope.rating =0
    $scope.button1 =false


    
    $scope.homeMenu = function($event){
                    $scope.snows.push({rating: $scope.rating})
    		
    		}
           
		

    $scope.click = function($event){
        $scope.button1 = !$scope.button1
        $scope.button1= true
        console.log("yes")
    }



        } )


    
  
   	
