// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (contact_submit) {
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
           
            apaterno: data["apaterno"],
            amaterno: data["amaterno"],
           nacimiento: data["nacimiento"], 
           telefono: data["telefono"],
           email: data["email"],
           estudios: data["estudios"],
              domicilio: data["domicilio"],
              colonia: data["colonia"],
              estado: data["estado"],
              municipio: data["municipio"],
              codigo: data["codigo"],
              horario: data["horario"],
                sueldomes: data["sueldomes"],
                comentario: data["comentario"],
          nombres: data["nombres"],
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
         
         
         var apaterno = document.getElementById("apaterno");
         var amaterno = document.getElementById("amaterno");
         var nacimiento = document.getElementById("nacimiento");
         var telefono = document.getElementById("telefono");
         var email = document.getElementById("email");
         var estudios = document.getElementById("estudios");
        
          var domicilio = document.getElementById("domicilio");
          var colonia = document.getElementById("colonia");
          var estado = document.getElementById("estado");
          var municipio = document.getElementById("municipio");
          var codigo = document.getElementById("codigo");
         var horario = document.getElementById("horario");

         var sueldomes = document.getElementById("sueldomes");
         var comentario = document.getElementById("comentario");
        var nombres = document.getElementById("nombres");

        var data = {
         
          "apaterno": apaterno.value,
          "amaterno": amaterno.value,
           "nacimiento": nacimiento.value,
          "telefono": telefono.value,
            "email": email.value,
            "estudios": estudios.value,
            
            "domicilio": domicilio.value,
            "colonia": colonia.value,
            "estado": estado.value,
            "municipio": municipio.value,
            "codigo": codigo.value,
            "horario": horario.value,
            
           "sueldomes": sueldomes.value,
          "nombres": nombres.value,
           "comentario": comentario.value
        }
        push_to_firebase(data);
};
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//





