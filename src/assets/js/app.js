// const { StatusBar } = require("@capacitor/status-bar");

angular.module('ibeacon', ['ionic', 'ngCordovaBeacon'])

.run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
        if(window.cordova && window.cordova.plugins.Keyboard){
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.somePlugin.someFunction();
        }
        if(window.Statusbar){
            StatusBar.stylebDefault();
            console.warn("Cordova is not available.");
        }
    });
})

.controller("ExampleController", function($scope, $rootScope, $ionicPlatform, $cordovaBeacon){

    $scope.beacons={};
    $ionicPlatform.ready(function(){
        $cordovaBeacon.requestWhenInUseAuthorization();

        $rootScope.$on("$cordovaBeacon.didRangeBeaconsInRegion", function(event, data){
            var uniqueBeaconKey;
            for(var1=0;i<data.beacons.length; i++){
                uniqueBeaconKey = data.beacons[i].uuid + ":" + data.beacons[i].major + ":" + data.beacons[i].minor;
                $scope.beacons[uniqueBeaconKey] = data.beacons[i];
            }
            $scope.apply();
        })

        $cordovaBeacon.startRagingBeaconsInRegion($cordovaBeacon.createBeaconRange("estimote", "uuis-lasdjkf-adskfj"));
    })
})