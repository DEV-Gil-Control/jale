// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


//- - - - - - - - -  Push Data - - - - - - - - - - - -//

var push_to_firebase = function(data){
        alert("Registro creado exitosamente, espera noticias pronto")
        var db = firebase.firestore();

        db.collection("messages").add({
           nombre: data["nombre"],
            apaterno: data["apaterno"],
            amaterno: data["amaterno"],
           nacimiento: data["nacimiento"], 
           telefono: data["telefono"],
           email: data["email"],
           primaria: data["primaria"],
              secundaria: data["secundaria"],
              bachillerato: data["bachillerato"],
              tecnica: data["tecnica"],
              licenciatura: data["licenciatura"],
              otro: data["otro"],
              domicilio: data["domicilio"],
              colonia: data["colonia"],
              estado: data["estado"],
              municipio: data["municipio"],
              codigo: data["codigo"],
              completo: data["completo"],
              matutino: data["matutino"],
           vespertino: data["vespertino"],
           nocturno: data["nocturno"],
                cualquiera: data["cualquiera"],
                sueldomes: data["sueldomes"],
                comentario: data["comentario"],
            timestamp: Date.now()
        })
        .then(function(docRef) {
            console.log("Message sent, ID: ", docRef.id);
            location.reload();
        })
        .catch(function(error) {
            console.error("No se pudo enviar el mensaje: ", error);
        });
      }

      var contact_submit = function(){
         
         var nombre = document.getElementById("nombre");
         var apaterno = document.getElementById("apaterno");
         var amaterno = document.getElementById("amaterno");
         var nacimiento = document.getElementById("nacimiento");
         var telefono = document.getElementById("telefono");
         var email = document.getElementById("email");
         var primaria = document.getElementById("primaria");
          var secundaria = document.getElementById("secundaria");
          var bachillerato = document.getElementById("bachillerato");
          var tecnica = document.getElementById("tecnica");
          var licenciatura = document.getElementById("licenciatura");
          var otro = document.getElementById("otro");
          var domicilio = document.getElementById("domicilio");
          var colonia = document.getElementById("colonia");
          var estado = document.getElementById("estado");
          var municipio = document.getElementById("municipio");
          var codigo = document.getElementById("codigo");
         var completo = document.getElementById("completo");
         var matutino = document.getElementById("matutino");
         var vespertino = document.getElementById("vespertino");
         var nocturno = document.getElementById("nocturno");
         var cualquiera = document.getElementById("cualquiera");
         var sueldomes = document.getElementById("sueldomes");
         var comentario = document.getElementById("comentario");

        var data = {
         "nombre": nombre.value,
          "apaterno": apaterno.value,
          "amaterno": amaterno.value,
           "nacimiento": nacimiento.value,
          "telefono": telefono.value,
            "email": email.value,
            "primaria": primaria.value,
            "secundaria": secundaria.value,
            "bachillerato": bachillerato.value,
            "tecnica": tecnica.value,
            "licenciatura": licenciatura.value,    
            "otro": otro.value,
            "domicilio": domicilio.value,
            "colonia": colonia.value,
            "estado": estado.value,
            "municipio": municipio.value,
            "codigo": codigo.value,
            "completo": completo.value,
            "matutino": matutino.value,
           "vespertino": vespertino.value,
           "nocturno": nocturno.value,
           "cualquiera": cualquiera.value,
           "sueldomes": sueldomes.value,
           "comentario": comentario.value
        }
        push_to_firebase(data);
};
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

function login() {
  var email = document.getElementById("email_login").value;
  var password = document.getElementById("password_login").value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode , " -" + errorMessage)
  });email-password.html
}

function observer(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      show(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      console.log(`Usuario activo: ${email}, Estado: ${emailVerified}`)
      get_user(email)
        
    } else {
      console.log('Ningun Usuario Activo')
      content.innerHTML = `
      <div class="container mt-5">
        <div class="card">
          <h5 class="card-header">Saliendo....</h5>
          </div></div></div>`;       
      // User is signed out.
      // ...
    }
  });
}
observer();

function singOut(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log(' Saliendo... ')
location.href = 'index.html'      
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
      // ...
    console.log(' Codigo de error (${errorCode}), Mensaje de error (${errorMessage})')
  });
}

function verification(){
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
    console.log(`Enviando correo...`);
  }).catch(function(error) {
    // An error happened.
    console.log(`Error (${error})`);

  });
}

function show(user) {
  var user = user;
  var content = document.getElementById('content');

  if (user.emailVerified) {
    content.innerHTML = `
      <div class="container mt-5">
        <div class="card">
          <h5 class="card-header">Bienvenido al sistema de alta y seguimiento: Amparo colectivo para la vacunación COVID-9 a menores</h5>
            <div id="bientutor" style="margin-left:22px; margin-top:20px; font-weight: bold;">
            </div>
          <div class="card-body">
            <div id="menor" class="shadow-none p-3 mb-5 bg-light rounded">
            
            </div>
              <div style="padding-top:20px;">
              <button class="btn btn-outline-dark" onclick="singOut()">Cerrar Sesión</button>
              </div>
          </div>
        </div>
      </div>
    `;
  }else{
    content.innerHTML = `
      <div class="container mt-5">
        <div class="card">
          <h5 class="card-header">Bienvenido al sistema de alta y seguimiento: Amparo colectivo para la vacunación COVID-9 a menores</h5>
            <div id="bientutor" style="margin-left:22px; margin-top:20px; font-weight: bold;">
            </div>
          <div class="card-body">
            <div id="menor" class="shadow-none p-3 mb-5 bg-light rounded">
            </div>
              <div style="padding-top:20px;">
              <p class="card-text">Ingresa a tu cuenta de correo registrada y verifica tu cuenta por favor.</p>
              <button class="btn btn-outline-dark" onclick="singOut()">Cerrar Sesión</button>
              </div>
          </div>
        </div>
      </div>
    `;
  }
}
