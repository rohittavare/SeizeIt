angular.module("dashboard", []).controller('ctrl', function($scope) {

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
      window.location = "loginStudent.html";
    }
  });

});
