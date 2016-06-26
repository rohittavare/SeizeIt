angular.module("dashboard", []).controller('ctrl', function($scope) {

  var currentUser = firebase.auth().currentUser;

  $scope.logout = function() {
      firebase.auth().signOut();
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if(user){
    } else {
      window.location = "loginStudent.html";
    }
  });

});
