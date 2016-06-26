angular.module("dashboard", []).controller('ctrl', function($scope) {
  $scope.name = "";
  $scope.dept = "";
  $scope.university = "";
  $scope.key = "";
  $scope.em = "";

  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
  });


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
      univ: $scope.univ,
      email: $scope.em
    }

    firebase.database().ref("Projects").push(obj);
    $scope.pName = "";
    $scope.start = "";
    $scope.end = "";
    $scope.gpaMin = "";
    $scope.desc = "";
  }


  $(document).ready(function() {

    var em = localStorage.getItem('email');
    console.log(em);
    var opp = [];
    var name = "";
    var gpa = 0;

    firebase.database().ref("users").once('value').then(function (snapshot) {
      snapshot.forEach(function(x) {
        
        if(x.val().email == em) {
          if(x.val().type == "student") {
          window.location = "index.html"
        }
          name = x.val().name;
          $scope.name = name;
          $scope.dept = x.val().dept;
          $scope.univ = x.val().univ;
          $scope.em = em;
        }
      });
    });
  });
});
