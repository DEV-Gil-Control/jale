*
 * requiredfield jquery widget
 *
 * Copyright 2011, Acatl Pacheco
 * Licensed under the MIT License.
 *
 */


$.widget("ui.requiredfield", {
	options : {
		isRequired : true,
		requiredClass : "required",
		watermarkText : null,
		watermarkClass : "watermark",
		functionValidate : null,
		dataType : "string",
		liveCheck : false,
		leaveWatermark:false,
		defaultIsInvalid:false
	},

	_create : function() {
		this.element.focus($.proxy(this._focusHandler, this));
		this.element.blur($.proxy(this._blurHandler, this));
		if (this.options.liveCheck) {
			this.element.keyup($.proxy(this._keyupHandler, this));
		}
	},

	_init : function() {
		if (this.options.watermarkText != null) {
			this._updateWatermark();
		}
	},

	_focusHandler : function(e) {
		var value = this.element.val();
		if (value == this.options.watermarkText && !this.options.leaveWatermark) {
			this.element.val("");
		}
		this.element.toggleClass(this.options.watermarkClass, false);
		
		if ( this.options.leaveWatermark ) {
		}
	},

	_blurHandler : function(e) {
		this._updateWatermark();
		this._updateValidation();
	},

	_keyupHandler : function(e) {
		this._updateValidation();
	},

	_updateValidation : function() {
		this.validate();
	},

	_updateWatermark : function() {

		if (this.options.watermarkText == null)
			return;

		var value = this.element.val();
		var watermarkIt = false;
		if (value == "" || value == this.options.watermarkText) {
			watermarkIt = true;
			this.element.val(this.options.watermarkText);
		}
		this.element.toggleClass(this.options.watermarkClass, watermarkIt);
	},
	
	refresh: function () {
		if (arguments[0] == true) {
			this.element.val("");
		}
		if (this.options.watermarkText != null) {
			this._updateWatermark();
		}
		this.element.toggleClass(this.options.requiredClass, false);
	},

	validate : function() {
		var valid = true;
		if (this.options.isRequired) {
			valid = this.isValid();
		}
		this.element.toggleClass(this.options.requiredClass, !valid);
		
		return valid;
	},

	isValid : function() {
		var value = this.element.val();

		var valid = true;

		if (value == "") {
			return false;
		}
		
		if (this.options.defaultIsInvalid == true && value == this.options.watermarkText) {
			return false;
		}

		var dataTypeValid = true;
		if (this.options.dataType != null) {
			var val = null;
			switch (this.options.dataType) {
				case "number":
					dataTypeValid = !isNaN(Number(value));
					break;
				case "string":
				default:
					dataTypeValid = jQuery.type(value) == this.options.dataType;
					break;
			}

			if (!dataTypeValid)
				return false;
		}

		var functionValidateValid = true;
		if (this.options.functionValidate != null) {
			functionValidateValid = this.options.functionValidate(this.element.val());
		}

		return dataTypeValid && functionValidateValid;
	}

});
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
