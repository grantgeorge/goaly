'use strict';

angular.module('goalyAppApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var chatRef = new Firebase('https://goaly.firebaseio.com');
    var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        // user authenticated with Firebase
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
      } else {
        // user is logged out
      }
    });

    $scope.login = function() {
      auth.login('password', {
        email: '<email@domain.com>',
        password: '<password>'
      });
    }

    $scope.createUser(email, password, function(error, user) {
      if (!error) {
        console.log('User Id: ' + user.id + ', Email: ' + user.email);
      }
    })

  });
