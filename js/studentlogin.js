function handleAuthChanges(){

    firebase.auth().onAuthStateChanged(function (user) {
        if(user){
            //TODO angular implementation to get database user data
            window.location = "studentdashboard.html";
        }else{
            //TODO sign out
        }
    });

}

window.onload = function() {
    handleAuthChanges();

    var signIn = document.getElementById('loginButton');
    signIn.addEventListener('click',function () {
        if(firebase.auth().currentUser){
            firebase.auth().signOut();
        }else {

            var email = document.getElementById("student-email"),
                password = document.getElementById("student-pass");
                localStorage.setItem("email", email.value);

            if(password.length<4){
                alert("Invalid email or password");
            }else {

                firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function (error) {

                    var errorCode = error.code;
                    var errorMessage = error.message;

                    alert("Invalid email or password");
                    email.value = "";
                    password.value = "";
                });

            }

        }
    });

};
