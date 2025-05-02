function guardar() {
 validar();
}
function validar() {
    const nombre = document.getElementById("id_nombre").value;
    const apellido = document.getElementById("id_apellido").value;
    const email = document.getElementById("id_email").value;
    const password = document.getElementById("id_password").value;
    const date = document.getElementById("id_fecha").value;


    if (nombre === "" && apellido === "" && email === "" && password === "" ) {
        console.log("ERROR no ha ingresado un caracter");
    } else {
        console.log("paso validacion del nombre");
    }
}