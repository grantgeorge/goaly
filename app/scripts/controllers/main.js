'use strict';

angular.module('goalyAppApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var messageRef = new Firebase('https://goaly.firebaseio.com/messages');
    // Automatically syncs everywhere in realtime
    $scope.messages = $firebase(messageRef);

    $scope.addMessage = function(e) {
      if (e.keyCode !== 13) return;
      $scope.messages.$add({from: $scope.name, body: $scope.msg});
      $scope.msg = '';
    };

  });
