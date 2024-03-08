beforeEach(doneWhenCordovaIsReady);

window.failJasmineTest = function(msg) {
	throw new Error(JSON.stringify(msg) || 'Test failed');
};

function doneWhenCordovaIsReady(done) {
    document.addEventListener("deviceready", function() {

        window.LocationManager = cordova.plugins.LocationManager;
        window.locationManager = cordova.plugins.locationManager;
        window.Regions = locationManager.Regions;

        window.Region = locationManager.Region;
        window.Delegate = locationManager.Delegate;
        window.CircularRegion = locationManager.CircularRegion;
        window.BeaconRegion = locationManager.BeaconRegion;


        window._ = cordova.require('com.unarin.cordova.beacon.underscorejs');

        done();

    }, false);
}
