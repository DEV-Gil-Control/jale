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
    document.getElementById(x).style.background ='#e35152′;
    // Show error prompt
    document.getElementById(x + 'Error').style.display = "block";
    return false;
    }
    }
    // Validate email
    function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
    document.getElementById('email').style.background ='#ccffcc';
    document.getElementById('emailError').style.display = "none";
    return true;
    }else{
    document.getElementById('email').style.background ='#e35152′;
    return false;
    }
    }
    // Validate Select boxes
    function validateSelect(x) {
    if (document.getElementById(x).selectedIndex !== 0) {
    document.getElementById(x).style.background ='#ccffcc';
    document.getElementById(x + 'Error').style.display = "none";
    return true;
    }else{
    document.getElementById(x).style.background ='#e35152′;
    return false;
    }
    }
    function validateRadio(x) {
    if (document.getElementById(x).checked) {
    return true;
    }else{
    return false;
    }
    }
    function validateCheckbox(x) {
    if (document.getElementById(x).checked) {
    return true;
    }
    return false;
    }
    function validateForm() {
    // Set error catcher
    var error = 0;
    // Check name
    if (!validateName('name')) {
    document.getElementById('nameError').style.display = "block";
    error++;
    }
    // Validate email
    if (!validateEmail(document.getElementById('email').value)) {
    document.getElementById('emailError').style.display = "block";
    error++;
    }
    // Validate animal dropdown box
    if (!validateSelect('animal')) {
    document.getElementById('animalError').style.display = "block";
    error++;
    }
    // Validate Radio
    if (validateRadio('left')) {

    }else if (validateRadio('right')) {

    }else{
    document.getElementById('handError').style.display = "block";
    error++;
    }
    if (!validateCheckbox('accept')) {
    document.getElementById('termsError').style.display = "block";
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


