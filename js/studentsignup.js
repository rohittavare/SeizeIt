window.onload = function() {

    var btn = document.getElementById("createAcc");

    btn.addEventListener('click',function () {

        var name = document.getElementById("name"),
            age = document.getElementById("age"),
            gpa = document.getElementById("gpa"),
            email = document.getElementById("email");

        firebase.auth().createUserWithEmailAndPassword(email.value, passwordGen()).catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;

            console.log("Error: " + errorCode + " message: " + errorMessage);
            alert("An error has occurred.")

        });

        firebase.auth().onAuthStateChanged(function (user) {
            if(user){
              var data = {
                name: name.value,
                age: age.value,
                gpa: gpa.value,
                email: email.value,
                type: "student"
              }
              firebase.database().ref("users").push(data);
                firebase.auth().sendPasswordResetEmail(user.email).then(function() {
                    // Email sent.

                    firebase.auth().signOut();
                    alert("Please check your email.");
                    window.location = "loginStudent.html";
                }, function(error) {
                    alert("An error has occoured.");
                });
            }
        });

    });

}

function passwordGen() {

    var possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
    var password = '';
    for(var i = 0; i < 16; i += 1) {
        password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }
    return password;

}

