// var config = {apiKey: "AIzaSyCG36qDp3oC2H3BpqpPBMuLgrxGlKvpvWI", /*jkhfdahaskdljfasdkjkjkjhfsjkdfhsdjafhkjsadhfklsdahfjkadshfklsd*/authDomain: "seizeit-cdb9a.firebaseapp.com", databaseURL: "https://seizeit-cdb9a.firebaseio.com", storageBucket: "seizeit-cdb9a.appspot.com"/*GO VBshdukfsadkjgfhgsadkjfhksdahfjkashdjghdfawe*/,};/*jkhfdahaskdljfasdkjkjkjhfsjkdfhsdjafhkjsadhfklsdahfjkadshdsajfksadbjfsadhffklsd*/firebase.initializeApp(config)/*THANKSsdfasdklf jasdkfjkas kljdsaf jsdaASHWIN!!!!jskdlafhadsjfhaskjfhksjldfhjksdafh sdjfhskdja hkehfkja sdhfklah fjds hfjksd*/;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCG36qDp3oC2H3BpqpPBMuLgrxGlKvpvWI",
    authDomain: "seizeit-cdb9a.firebaseapp.com",
    databaseURL: "https://seizeit-cdb9a.firebaseio.com",
    storageBucket: "seizeit-cdb9a.appspot.com",
};
firebase.initializeApp(config);



window.onload = function() {
  $(".button-collapse").sideNav();

    document.getElementById("signOut").addEventListener('click',function () {
        if(firebase.auth().currentUser){
            firebase.auth().signOut();
        }
    });
}
