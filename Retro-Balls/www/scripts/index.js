﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.


    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log(navigator.accelerometer);
        }
        var options = { frequency: 500 };  // Update every 3 seconds
        var watchID = navigator.accelerometer.watchAcceleration(Controls.onSuccess, Controls.onError, options);
    }


    function onPause() {
        // TODO:90 This application has been suspended. Save application state here.
    }

    function onResume() {
        // TODO:70 This application has been reactivated. Restore application state here.
    }
