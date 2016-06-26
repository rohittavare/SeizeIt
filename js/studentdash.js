angular.module("dashboard", []).controller('ctrl', function($scope) {

  $scope.name = "";
  $scope.gpa = 0;
  $scope.em = "";

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
    $scope.em = localStorage.getItem('email');

    firebase.database().ref("users").once('value').then(function (snapshot) {
      snapshot.forEach(function(x) {
        if(x.val().email == $scope.em) {
          $scope.name = x.val().name;
          $scope.gpa = parseInt(x.val().gpa);
        }
      });
    });
  });

  $scope.compile = function() {
    firebase.database().ref("Projects").once('value').then(function(snapshot) {
      $scope.opportunities = [];
      snapshot.forEach(function(x) {
        $scope.opportunities.push(x.val());
      });
      });
  }

  $scope.email = function(x) {
    window.open('mailto:' + x.email + '?subject='+ x.projName +'&body=Dear Professor ' + x.prof + ',\n My name is ' + $scope.name + '. I saw that you were looking for interns for your ' + x.projName + ' project. I am very interested in ' + x.dept + ' and would greatly appreciate an opportunity to work with you. I have a ' + $scope.gpa + 'GPA, and am very qualified for the job. \n From,\n' + $scope.name);
  }
});