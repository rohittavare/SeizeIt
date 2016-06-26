angular.module("dashboard", []).controller('ctrl', function($scope) {

  var currentUser = firebase.auth().currentUser;
  $scope.name = "";
  $scope.gpa = 0;

  $scope.logout = function() {
      firebase.auth().signOut();
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if(user){
    } else {
      window.location = "loginStudent.html";
    }
  });

  $(document).ready(function() {
    var opp = [];
    var name = "";
    var gpa = 0;

    firebase.database().ref("child").once('value').on(function (snapshot) {
      snapshot.forEach(function(x) {
        if(x.val().email == currentUser.email) {
          name = x.val().name;
          gpa = parseInt(x.val().gpa);

        }
      });
    });
  });

});
