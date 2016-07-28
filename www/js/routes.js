angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    abstract:true
  })

  .state('home.01BaseLeitura', {
    url: '/001base',
    views: {
      'tab1': {
        templateUrl: 'templates/01BaseLeitura.html',
        controller: '01BaseLeituraCtrl'
      }
    }
  })

  .state('home.03Consumidor', {
    url: '/003consumidor',
    views: {
      'tab3': {
        templateUrl: 'templates/03Consumidor.html',
        controller: '03ConsumidorCtrl'
      }
    }
  })

  .state('home.02Leiturista', {
    url: '/002leiturista',
    views: {
      'tab2': {
        templateUrl: 'templates/02Leiturista.html',
        controller: '02LeituristaCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('solicitarAcesso', {
    url: '/solicitaracesso',
    templateUrl: 'templates/solicitarAcesso.html',
    controller: 'solicitarAcessoCtrl'
  })

//$urlRouterProvider.otherwise('/login')

  

});