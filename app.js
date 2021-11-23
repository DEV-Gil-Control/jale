/**
 * formChecker check Required field on form and add red start with span tag
 * before this field or after. You can change all parameters.
 * @author Kevin FERRANDON
 * @version 1.0.0
 * @type Object
 */
class formChecker {
    constructor() {
        this.setRequiered();
    }
/**
 * Set text, html tag and color for html tag with required attribut on form
 * @param {string} text
 * @param {string} color
 * @param {string} tag
 * @returns 
 */
    setRequiered(text='*', color = '#ff0000;', tag='span') {
        this.sheet = document.createElement('style');
        this.sheet.innerHTML = ".required{ color: " + color + "}";
        document.body.appendChild(this.sheet);
        this.span = document.createElement(tag);
        this.span.textContent = text;
        this.span.setAttribute('class', 'required');
    }
    /**
     * Add node before or after input or select field 
     * @param {string} when
     * @returns 
     */
    addRequired(when='before') {
        var formsCollection = document.getElementsByTagName("form");
        for (var j = 0; j < formsCollection.length; j++)
        {
            this.elts = document.forms[j].querySelectorAll("[required]");
            for (var i = 0; i < this.elts.length; i++) {
                var span = this.span.cloneNode(true);
                if(when==='before'){
                    this.elts[i].before(span);
                }else{
                    this.elts[i].after(span);
                }
                
            }

        }
    }
}

/**
 * Simple example to use formChecker library 
 * You can uncomment code to check feature.
 * @returns 
 */
window.onload = function () {
    var checker = new formChecker();
 //   checker.setRequiered(' * (required)', '#ffcccc', 'p');
    checker.addRequired();
 //   checker.addRequired('after');
    
    
    
}

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
