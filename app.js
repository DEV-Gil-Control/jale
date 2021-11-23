function validateName(x) {
    // Validation rule
    var re = /[A-Za-z -']$/;
    // Check input
    if (re.test(document.getElementById(x).value)) {
    // Style green
    document.getElementById(x).style.background ='#ccffcc';
    // Hide error prompt
    document.getElementById(x + 'Error').style.display = "none";
    return true;
    }else{
    // Style red
    
    // Show error prompt
    document.getElementById(x + 'Error').style.display = "block";
    return false;
    }
    }
    
    
    // Set error catcher
    var error = 0;
    // Check name
    if (!validateName('name')) {
    document.getElementById('nameError').style.display = "block";
    error++;
    }
   
    
    // Don't submit form if there are errors
    if (error > 0) {
    return false;
    }
    }
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
  
  
  //Save Form Data To Firebase
  db.doc().set({
    name: name,
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


