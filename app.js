
//- - - - - - - - -  Push Data - - - - - - - - - - - -//

var push_to_firebase = function(data){
        alert("Registro creado exitosamente, espera noticias pronto")
        var db = firebase.firestore();

        db.collection("messages").add({
           
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
           
        var nombres = document.getElementById("nombres");

        var data = {
         

          "nombres": nombres.value
        }
        

        push_to_firebase(data);
};
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
