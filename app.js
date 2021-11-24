
//- - - - - - - - -  Push Data - - - - - - - - - - - -//

//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyDJjGU7r9Dn2UsNTOrCdoHi8MDBNE31-Ic",
  authDomain: "jale-a6c26.firebaseapp.com",
  databaseURL: "https://jale-a6c26.firebaseio.com",
  projectId: "jale-a6c26",
  storageBucket: "jale-a6c26.appspot.com",
  messagingSenderId: "125185951298",
  appId: "1:125185951298:web:3b067709048a1a0edf0fdb"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("messages")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()
  
  //Get Form Values
  let name = document.getElementById('name').value;
  let apaterno = document.getElementById('apaterno').value;
  let amaterno = document.getElementById('amaterno').value;
  
  
  //Save Form Data To Firebase
  db.doc().set({
    name: name,
    apaterno: apaterno,
    amaterno: amaterno,
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Tus datos fueron enviados con éxito")
})
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


