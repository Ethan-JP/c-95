
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDp2gAqXczbA0qe4L9Ds2P0Aw0R9F3Ckzs",
      authDomain: "kwitter-e9c58.firebaseapp.com",
      databaseURL: "https://kwitter-e9c58-default-rtdb.firebaseio.com",
      projectId: "kwitter-e9c58",
      storageBucket: "kwitter-e9c58.appspot.com",
      messagingSenderId: "336202538250",
      appId: "1:336202538250:web:aed46ba6386d8a8df66ef3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username");
document.getElementById("welcomeuser").innerHTML="Welcome : "+user_name

//code for adding room in the database
function addroom() {
      room_name=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
      status : "roomname added"
      })
      //code for setting the roomname in the local storage
      localStorage.setItem("roomname",room_name)
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row=`<div class="room_name" id=${Room_names} onclick="gotoroom(this.id)">${Room_names}</div> <hr>`
       document.getElementById("output").innerHTML+=row
      //Start code
console.log(Room_names)
      //End code
      });});}
getData();
function gotoroom(room) {
      localStorage.setItem("roomname",room)
      window.location="kwitter_page.html"
}
function logout() {
            localStorage.removeItem("roomname")
            localStorage.removeItem("username")
            window.location="index.html"
}