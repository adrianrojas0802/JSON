	var nombre = null;
	var edad = null;
	var telefono = null;
	var arreglo = new Array();
	var j = 0;
	
	function agregarNombre(parametro){
		nombre = parametro.value;
		
		mostrarNombre.innerHTML = "Nombre: " +nombre;
	}
	
	function agregarEdad(parametro){
		edad = parametro.value;
		
		mostrarEdad.innerHTML = "Edad: " +edad;
	}
	
	function agregarTel(parametro){
		telefono = parametro.value;
		
		mostrarTel.innerHTML = "Telefono: " +telefono;
	}

	function agregar(){
		var objeto = {
			"nombre": nombre,
			"edad": edad,
			"telefono": telefono,

		};
		arreglo[arreglo.length] = objeto;
		alert("Registro guardado");
        mostrar();
	}
    function eliminar(){
        let pos = document.getElementById("actualizarEliminar").value;
        numeroElementos = 1
        let elementosEliminados = arreglo.splice(pos, numeroElementos)
        mostrar();
        document.getElementById("nombre").value = "";
		alert("El registro se ha eliminado exitosamente");
    }
	function actu(){

		let pos = document.getElementById("actualizarEliminar").value;
		
		var objetos = {
			"nombre": nombre,
			"edad": edad,
			"telefono": telefono,
		};
		
		let elementosActualizados = arreglo.splice(pos, 1, objetos );
        mostrar();
		alert("El registro se actualizo exitoramente");
	}	
	function mostrar(){
		var msj = "";
		for(var i = 0; i < arreglo.length; i++){
			msj += "<tr>"+
				"<td>" +arreglo[i].nombre +"</td>" +
				"<td>" +arreglo[i].edad +"</td>" +
				"<td>" +arreglo[i].telefono +"</td>"+
					"</tr>";
		}
		document.getElementById("resultado1").innerHTML = msj;
	}
	
	function buscar(){
       var buscar = document.getElementById("nb").value;
       for(i = 0;i < arreglo.length; i++){
			if(buscar === arreglo[i].nombre){
				alert("El registro es existente");
			}else{
				alert("EL registro no es existente");	
			}   
		}			
    }
	
