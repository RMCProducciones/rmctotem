
	var cargando = '<div class="cargando"></div>';

	//Funcion para crear el ajax
	function nuevoAjax(xmlhttp){
		//var xmlhttp=false;
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xmlhttp = false;
			}
		}
	
		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
			xmlhttp = new XMLHttpRequest();
		}
		return xmlhttp;
	}

	// Función Literal
	var vacia = function () {};
		
	function abrir(paginaDestino, destino, parametros, funcion, metodo){		
		
		funcion = funcion || vacia; 
		parametros = parametros || "";
		metodo = metodo || "POST";
		
		var contenedor;
		var ajax;
		contenedor = document.getElementById(destino);		
				
		contenedor.innerHTML = cargando;  
		
		ajax= nuevoAjax(ajax);
		ajax.open(metodo,paginaDestino,true);
				
		ajax.onreadystatechange=function() {
			if (ajax.readyState==4) {		
				if(ajax.status==200){
					contenedor.innerHTML = ajax.responseText
					funcion(); 
				}
			}
			else
				contenedor.innerHTML = cargando; 
		}
		ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		ajax.send(parametros);
	}