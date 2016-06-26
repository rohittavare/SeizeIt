var config = {
    apiKey: "AIzaSyCG36qDp3oC2H3BpqpPBMuLgrxGlKvpvWI",
    authDomain: "seizeit-cdb9a.firebaseapp.com",
    databaseURL: "https://seizeit-cdb9a.firebaseio.com",
    storageBucket: "seizeit-cdb9a.appspot.com",
};
firebase.initializeApp(config);

var firebaseAuth = firebase.auth();

firebaseAuth.signInWithEmailAndPassword($("#student-email").value, $("#student-pass").value).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        alert("Invalid email or password");
        $("#student-email").value = "";
        $("#student-pass").value = "";
    }
);