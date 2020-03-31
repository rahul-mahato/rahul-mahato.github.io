var firebaseConfig = {
    apiKey: "AIzaSyD_-LSdyX1mFN8WazeBvk3ay0E5nBE-rkg",
    authDomain: "portfolio-dccd6.firebaseapp.com",
    databaseURL: "https://portfolio-dccd6.firebaseio.com",
    projectId: "portfolio-dccd6",
    storageBucket: "portfolio-dccd6.appspot.com",
    messagingSenderId: "157952387407",
    appId: "1:157952387407:web:5e9285a37f4fbf0a443d3a",
    measurementId: "G-ERZGXY3R0Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
var db = firebase.firestore();

const contactform = document.querySelector("#contactform");

contactform.addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.querySelector('.message');
    msg.innerHTML = "";
    const name = contactform["name"].value;
    const email = contactform["email"].value;
    const phone = contactform["phone"].value;
    const message = contactform["message"].value;

    db
        .collection("contacts").add({
            name: name,
            phone: phone,
            email: email,
            message: message
        })
        .then(docRef => {

            console.log("Document written with ID: ", docRef.id);
            msg.classList.remove('text-warning');
            msg.innerHTML = "Your response has been successfully submitted"

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
            msg.classList.add('text-warning');
            msg.innerHTML = "Error !! please try again."
        });


})
