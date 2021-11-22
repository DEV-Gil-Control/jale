//- - - - - - - get data- - - - - - - - - - - - //
var get_user = function(email) {
   var db = firebase.firestore();
   db.collection("messages").where("email", "==", email)
   .get()
   .then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
   // doc.data() is never undefined for query doc snapshots
   console.log(doc.id, " => ", doc.data());
       var menor = document.getElementById("menor");
       menor.innerHTML = menor.innerHTML + `<div class="alert alert-dark" role="alert"><strong>CURP:</strong> ${doc.data().curpmenor}</div>
       <div class="alert alert-primary" role="alert" style="margin-top:-20px;"><strong>Menor registrado:</strong></div>
       <div>Nombre del Niño/Niña: ${doc.data().namemenor}</div>
       <div>Apellido paterno: ${doc.data().apaternomenor}</div>
       <div>Apellido Materno: ${doc.data().amaternomenor}</div>
       <div>Edad: ${doc.data().edadmenor}</div>
       <div>Ciudad de Nacimiento: ${doc.data().ciudadmenor}</div>
       <div>Estado de Nacimiento: ${doc.data().estadomenor}</div>
       <div>CURP: ${doc.data().curpmenor}</div>
       <div style="padding-top:20px;">
       <div class="alert alert-primary" role="alert"><strong>Tutor responsable que lo registra:</strong></div>
       <div>Nombre: ${doc.data().nametutor}</div>
       <div>Apellido paterno: ${doc.data().apaternotutor}</div>
       <div>Apellido materno: ${doc.data().amaternotutor}</div>
       <div>Domicilio: ${doc.data().domiciliotutor}</div>
       <div>Colonia: ${doc.data().teltutor}</div>
       <div>Código Postal: ${doc.data().cptutor}</div>
       <div>Municipio: ${doc.data().mpiotutor}</div>
       <div>Tel. casa u oficna: ${doc.data().teltutor}</div>
       <div>Celular: ${doc.data().celtutor}</div>
       <div>Correo Electrónico: ${doc.data().mailtutor}</div>
       <div>Red social: ${doc.data().redtutor}</div>
       <div style="padding-top:20px;">
       <div class="alert alert-warning" role="alert"><strong>Estatus:</strong></div>
       <div><strong>Aviso de Privacidad Impreso:</strong> ${doc.data().privacidad}</div>
       <div><strong>Amparo Impreso:</strong> ${doc.data().amparo}</div>
       <div style="padding-bottom:60px; padding-top:20px; text-align:right;">
       <input type="button" class="btn btn-info" value="Editar o Cambiar Campos y Estatus" onclick="window.location.replace('https://interno.chaledelafuente.mx/editar.html?ID=${doc.id}')" />
       <input type="button" class="btn btn-dark" value="Ver e imprimir el aviso de privacidad" onclick="window.open('https://interno.chaledelafuente.mx/legal.html?ID=${doc.id}')" />
       <input type="button" class="btn btn-success" value="Ver e imprimir el amparo" onclick="window.open('https://interno.chaledelafuente.mx/amparo.html?ID=${doc.id}')" />
       <div style="margin-bottom:30px;"></div>`;
               })
    })
   .catch(function(error) {
          console.error(error);
        });
 }  
//- - - - - - - - -  Query String - - - - - - - - - - - -//


//- - - - - - - - - - - - - - - - -  - - - - - - - - - - - -//

//- - - - - - - - -  Push Data - - - - - - - - - - - -//

var push_to_firebase = function(data){
        alert("Registro creado exitosamente, continúa para descargar el documento")
        var db = firebase.firestore();

        db.collection("messages").add({
           namemenor: data["namemenor"],
            apaternomenor: data["apaternomenor"],
            amaternomenor: data["amaternomenor"],
           edadmenor: data["edadmenor"], 
           curpmenor: data["curpmenor"],
           ciudadmenor: data["ciudadmenor"],
           estadomenor: data["estadomenor"],
              nametutor: data["nametutor"],
              apaternotutor: data["apaternotutor"],
              amaternotutor: data["amaternotutor"],
              domiciliotutor: data["domiciliotutor"],
              coloniatutor: data["coloniatutor"],
              cptutor: data["cptutor"],
              mpiotutor: data["mpiotutor"],
              teltutor: data["teltutor"],
              celtutor: data["celtutor"],
              redtutor: data["redtutor"],
              mailtutor: data["mailtutor"],
              email: data["email"],
           privacidad: data["privacidad"],
           amparo: data["amparo"],
            timestamp: Date.now()
        })
        .then(function(docRef) {
            console.log("Message sent, ID: ", docRef.id);
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }

      var contact_submit = function(){
         
         var nombre = document.getElementById("nombre");
         var apaterno = document.getElementById("apaterno");
         var amaterno = document.getElementById("amaterno");
         var nacimiento = document.getElementById("nacimiento");
         var telefono = document.getElementById("telefono");
         var email = document.getElementById("email");
         var primara = document.getElementById("primara");
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
          

      }
      
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


