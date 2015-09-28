
angular.module('myApp', ["ngRating"])
angular.module('myApp').controller('homeButton', function ($scope) {
    $scope.snows = []
    $scope.ratings	=[1, 2, 3, 4, 5]
    $scope.rating =0
    $scope.button1 =false
    $scope.page1=true
    $scope.page2=false
    $scope.page3=false
    
    $scope.homeMenu = function($event){
                    $scope.snows.push({rating: $scope.rating})
    		
    		}
           
		

    $scope.click = function($event){
        $scope.button1 = !$scope.button1
        $scope.button1= true
        console.log("yes")

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


    
  
   	
