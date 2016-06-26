angular.module("dashboard", []).controller('ctrl', function($scope) {
  $scope.name = "";
  $scope.dept = "";
  $scope.university = "";
  $scope.key = "";

  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  var currentUser = firebase.auth().currentUser;

  $scope.logout = function() {
      firebase.auth().signOut();
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if(user){
    } else {
      window.location = "loginProfessor.html";
    }
  });

  $scope.addProject = function() {
    var obj = {
      prof: $scope.name,
      projName: $scope.pName,
      start: $scope.start,
      end: $scope.end,
      gpa: $scope.gpaMin,
      desc: $scope.desc,
      dept: $scope.dept,
      univ: $scope.univ
    }

    firebase.database().ref("Projects").push(obj);
    firebase.database().ref("users/" + $scope.key + "/projects").push(obj);

  }


  $(document).ready(function() {
    var opp = [];
    var name = "";
    var gpa = 0;

    firebase.database().ref("users").once('value').on(function (snapshot) {
      snapshot.forEach(function(x) {
        if(x.val().email == currentUser.email) {
          name = x.val().name;
          $scope.name = name;
          $scope.dept = x.val().dept;
          $scope.univ = x.val().univ;
          $scope.key = x.key();
        }
      });
    });
  });
});
