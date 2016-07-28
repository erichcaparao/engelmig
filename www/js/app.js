// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives','makerBlock'])

.run(function($ionicPlatform, $ionicFire, $mSecure, $rootScope, $location, $ionicLoading, $ionicHistory) {

  var config = {
      //Firebase config here
      apiKey: "AIzaSyD5vyZtfoQHiKQL_uPByXkW5a8p7A0gI0I",
      authDomain: "engelmig-1.firebaseapp.com",
      databaseURL: "https://engelmig-1.firebaseio.com",
      storageBucket: "engelmig-1.appspot.com",
    };


  $ionicLoading.show({
    template: '<ion-spinner icon="spiral" class="mui-spinner-orange"></ion-spinner>'
  });

  $ionicPlatform.registerBackButtonAction(function (event) {
    if ($rootScope.loginPage) {
      navigator.app.exitApp();
    } else {
      ionic.History.backView();
    }
  }, 100);



  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $ionicFire.init(config);//inicializar o banco de dados
    $ionicFire.auth().onAuthStateChanged(function(user) {
      if (user) {
        $location.path('/menu/home');
        $ionicLoading.hide();
        $rootScope.logUser.pass = "";
        $rootScope.regUser.username = "";
        $rootScope.regUser.email = "";
        $rootScope.regUser.pass = null;
        $rootScope.logUser.confirmPass = "";
        $rootScope.loginPage = false;
      } else {
        $location.path('/login');
        $ionicLoading.hide();
        $rootScope.loginPage = true;
      }
    });





  });
})