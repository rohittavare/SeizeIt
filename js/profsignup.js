window.onload = function() {

    var btn = document.getElementById("createAcc");

    btn.addEventListener('click',function () {

        var name = document.getElementById("name"),
            dept = document.getElementById("dept"),
            univ = document.getElementById("university"),
            email = document.getElementById("email");
        var i = 0;

        firebase.auth().createUserWithEmailAndPassword(email.value, passwordGen()).catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;

            console.log("Error: " + errorCode + " message: " + errorMessage);
            alert("An error has occurred.")

        });

        firebase.auth().onAuthStateChanged(function (user) {
            if(user){
                firebase.database().ref('prof').push({
                    name: name.value,
                    dept: dept.value,
                    univ: univ.value,
                    email: email.value,
                    type: "prof"
                });
                firebase.auth().sendPasswordResetEmail(user.email).then(function() {
                    //Email sent.
                    firebase.auth().signOut();
                    alert("Please check your email.");
                    window.location = "loginProfessor.html";
                }, function(error) {
                    alert("An error has occoured.");
                });
            }
        });

    })

}

function passwordGen() {

    var possibleChars = "abcdefghqrstDEuvwxyzABCFGijklXYZmnopHIJKLM56789NTUVW01234!@#$";
    var password = '';
    for(var i = 0; i < 16; i += 1) {
        password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }
    return password;

}
