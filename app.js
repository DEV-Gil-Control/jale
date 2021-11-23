function checkForm() {
  hideAllErrors();
  var formIsValid =
    showErrorAndFocusIf('FieldData0', isEmpty, 'nameError')
    && showErrorAndFocusIf('FieldData2', isEmpty, 'emailError')
    && showErrorAndFocusIf('FieldData2', isAnInvalidEmail, 'emailError2')
    && showErrorAndFocusIf('FieldData3', isEmpty, 'categoryError')
    && showErrorAndFocusIf('FieldData1', isEmpty, 'questionError');

  /* For debugging, lets prevent the form from submitting. */
  if (formIsValid) {
    alert("Valid form!");
    return false;
  }

  return formIsValid;
}

function showErrorAndFocusIf(fieldId, predicate, errorId) {
  var field = document.getElementById(fieldId);
  if (predicate(field)) {
    document.getElementById(errorId).style.display = 'inline';
    if (field.select) {
      field.select();
    }
    field.focus();
    return false;
  }

  return true;
}

function isEmpty(field) {
  return field.value == '';
}

function isAnInvalidEmail(field) {
  var email = field.value;

  var ok = "1234567890qwertyuiop[]asdfghjklzxcvbnm.@-_QWERTYUIOPASDFGHJKLZXCVBNM";

  for(i = 0; i < email.length; i++){
    if(ok.indexOf(email.charAt(i)) < 0) {
      return true;
    }
  }

  re = /(@.*@)|(\.\.)|(^\.)|(^@)|(@$)|(\.$)|(@\.)/;
  re_two = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return re.test(email) || !re_two.test(email);
}



function hideAllErrors() {
  document.getElementById("nameError").style.display = "none"
  document.getElementById("emailError").style.display = "none"
  document.getElementById("emailError2").style.display = "none"
  document.getElementById("categoryError").style.display = "none"
  document.getElementById("questionError").style.display = "none"
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


