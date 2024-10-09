//capturamos todos los elementos donde el usuario escribira los datos del empleado
let elementoLegajo = document.getElementById('legajo');
let elementoNombre= document.getElementById('nombre');
let elementoApellido = document.getElementById('apellido');
let elementoFechaNacimiento = document.getElementById('fecha');
let elementoPuesto = document.getElementById('cargo');

//construimos el constructor del objto empleado que recibira los parametros que el usuario le envie
function Empleado(legajo, nombre, apellido, fechaNacimiento, puesto){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.puesto = puesto;
}

//construimos el arreglo en el que se almacenara el objeto
let arrayEmpleado = [];

//funcion que agrega los valores al objeto
function ingresarEmpleado(){
    let objeto = new Empleado();//creamos la instancia del objeto
    if(elementoLegajo.value != "" && elementoNombre.value != "" && elementoApellido.value != "" && elementoFechaNacimiento.value != "" && elementoPuesto.value != ""){
        //damos el valor de la varible al objeto segun corresponda
    objeto.legajo = elementoLegajo.value;
    objeto.nombre = elementoNombre.value;
    objeto.apellido =  elementoApellido.value;
    objeto.fechaNacimiento = elementoFechaNacimiento.value;
    objeto.puesto = elementoPuesto.value;

    //damos el objeto al array
    arrayEmpleado.push(objeto);

    //mostramos el mensaje
    mensajeGuardado();

    //limpiamos los inputs
    limpiar();
    }
}

function limpiar(){
    elementoLegajo.value ="";
    elementoNombre.value = "";
    elementoApellido.value = "";
    elementoFechaNacimiento.value ="";
    elementoPuesto.value = "";
}

function mensajeGuardado(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Empleado guardado",
        showConfirmButton: false,
        timer: 1500
      });
}




