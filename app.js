

//- - - - - - - - -  Push Data - - - - - - - - - - - -//

var push_to_firebase = function(data){
        alert("Registro creado exitosamente, espera noticias pronto")
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


