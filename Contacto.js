function validacion() {
    var nombre = document.getElementById('nombre')
    if(nombre.value.length == 0 || !nombre.value.match(/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/)){
        alert("El nombre debe contener solo letras y espacios")
        return false;
    }

    var email=document.getElementById('email').value

    if( !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) ) { 
        alert("El correo ingresado es incorrecto")
        return false
    }
    
    var mensaje=document.getElementById('mensaje')
    if(mensaje.value.length==0){
        alert("No puede enviar un mensaje vacio.")
    }

    return true
}