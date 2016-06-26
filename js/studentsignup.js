window.onload = function() {
    document.getElementById("createAcc").addEventListener('click',function () {

        var name = document.getElementById("name"),
            age = document.getElementById("age"),
            gpa = document.getElementById("gpa"),
            email = document.getElementById("email");

        firebase.auth().createUserWithEmailAndPassword(email.value,passwordGen()).catch(function (error) {

            alert("A problem has occurred. Please try again later with creating the acc");
            name.value = "";
            age.value = "";
            gpa.value = "";
            email.value = "";
            return;

        });


        firebase.auth().sendPasswordResetEmail(email.value).then(function() {
            firebase.database().ref('users/'+email.value).set({

                name: name.value,
                age: age.value,
                gpa: gpa.value,
                email: email.value

            });
            //TODO add location to signup page.
            //window.location()
            alert("Check your emails!!!")
        }, function(error) {
            //TODO add console.log to the errors
            alert("A problem has occurred. Please try again later with firebase");
            name.value = "";
            age.value = "";
            gpa.value = "";
            email.value = "";
        });

    }

    );

}

function passwordGen() {

    var possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
    var password = '';
    for(var i = 0; i < 16; i += 1) {
        password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }
    return password;

}