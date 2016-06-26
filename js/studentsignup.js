window.onload = function() {

    var name = document.getElementById("name").value,
        age = document.getElementById("age").value,
        gpa = document.getElementById("gpa").value,
        email = document.getElementById("email").value,
        database = firebase.database();

    document.getElementById('createAcc').addEventListener('click',function () {

        firebase.auth().createUserWithEmailAndPassword(email.value,passwordGen()).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        database.ref('Students').push({
                    Name: name,
                    Age: age,
                    GPA: gpa
                });
        
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("pushed");
            } else {
                // No user is signed in.
            }
        });

    })

}

function passwordGen() {

    var possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
    var password = '';
    for(var i = 0; i < 16; i += 1) {
        password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }
    return password;

}




//
// var btn = document.getElementById("createAcc");
//
// btn.addEventListener('click',function () {
//
//     var name = document.getElementById("name"),
//         age = document.getElementById("age"),
//         gpa = document.getElementById("gpa"),
//         email = document.getElementById("email");
//
//     firebase.auth().createUserWithEmailAndPassword(email.value, passwordGen()).catch(function(error) {
//
//         var errorCode = error.code;
//         var errorMessage = error.message;
//
//         console.log("Error: " + errorCode + " message: " + errorMessage);
//         alert("An error has occurred.")
//
//     });
//
//     firebase.auth().onAuthStateChanged(function (user) {
//         if(user){
//             firebase.auth().sendPasswordResetEmail(user.email).then(function() {
//                 // Email sent.
//                 firebase.database().ref().push({
//                     name: name.value,
//                     age: age.value,
//                     gpa: gpa.value,
//                     email: email.value,
//                     type: "student"
//                 });
//                 firebase.auth().signOut();
//                 alert("Please check your email.");
//                 window.location = "loginStudent.html";
//             }, function(error) {
//                 alert("An error has occoured.");
//             });
//         }
//     });
//
// })