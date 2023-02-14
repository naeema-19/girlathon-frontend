// const firebaseConfig = {
//   apiKey: "AIzaSyCLduNwd2jtvvVLh0160V6Ton4HqlRRZQA",
//   authDomain: "girlathon-d90df.firebaseapp.com",
//   projectId: "girlathon-d90df",
//   storageBucket: "girlathon-d90df.appspot.com",
//   messagingSenderId: "744649727731",
//   appId: "1:744649727731:web:3eda38467080180f622186",
//   measurementId: "G-9K9JE07HCM"
// };
// // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// let's code 
//var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
var name = document.getElementById('fname').value;
//var phoneno = document.getElementById('phone').value;
//var teamname = document.getElementById('tname').value;

}
//const auth = firebase.auth();
async function  SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
   /// const promise = await auth.signInWithEmailAndPassword(email,password);
    //console.log(promise);
    promise.catch( e => alert(e.msg));
   // window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword'),
        phoneno : getId('phone'),
        teamname : getId('tname')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}

