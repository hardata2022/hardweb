const formulario = document.getElementById('contact-form');
const inputs = document.querySelectorAll('#contact-form input');

var nom = document.getElementById('inputName').value;

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		
		case "nombre":
			
            if (expresiones.nombre.test(e.target.value)) {

                
              
            }else{
                
                
                
            }
		break;

        case "telefono":
            if (expresiones.telefono.test(e.target.value)) {
              
            }else{
                
            }
		break;
		
		case "correo":
            if (expresiones.correo.test(e.target.value)) {
                
            }else{
                
            }
		break;

        case "asunto":
            if (expresiones.nombre.test(e.target.value)) {
              
            }else{
                
            }
		break;
		 
	} 

    
}



