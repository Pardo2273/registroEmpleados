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

//despues de guardar el empleado limpia los input
function limpiar(){
    elementoLegajo.value ="";
    elementoNombre.value = "";
    elementoApellido.value = "";
    elementoFechaNacimiento.value ="";
    elementoPuesto.value = "";
}

//se muestra solo cuando guardo al empleado
function mensajeGuardado(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Empleado guardado",
        showConfirmButton: false,
        timer: 1500
      });
}


//funcion que muestra los empleados
function mostrarEmpleados(){
    document.getElementById('textoEmpleado').textContent = "Empleados: "; // esto es para darle titulo al h3
    //capturo el ul que almacenara los li
    let lista = document.getElementById('containerLista');
    for(let item of arrayEmpleado){// por cada item del arreglo (o sea cada objeto que esta dentro del arreglo)
        let textoLista = "";//se vacia cada vez que entra a otro objeto, porque sino estaria concatenando absolutamente todo
        for(let propiedadEmpleado in item){//por cada propiedad del objeto
            textoLista += propiedadEmpleado + ": " + item[propiedadEmpleado] +", ";//brindo los valores del objeto
        } 

        //creo el conjunto de elementos que voy a emplear para desplegar la informracion del empleado, en el html quedaria asi: li>div>p> 
        let itemLista = document.createElement("li");
        let elementoDiv1 = document.createElement("div");
        let elementoParraf= document.createElement("p");

        //doy la clase de tailwind
        itemLista.setAttribute("class", "flex justify-between gap-x-6 py-5");
        elementoDiv1.setAttribute("class", "flex min-w-0 gap-x-4");
        elementoParraf.setAttribute("class", "text-sm font-semibold leading-6 text-gray-900");

        elementoParraf.innerText = textoLista;//le brindo el texto que se crea en el for in

        elementoDiv1.appendChild(elementoParraf); 


        itemLista.appendChild(elementoDiv1);//el li tiene adentro el div


        lista.appendChild(itemLista);//brindo el hijo al ul 
    }
}

