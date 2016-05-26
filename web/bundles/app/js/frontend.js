url_app = document.getElementById("path").value;

url_video = "http://localhost:8080/rmctotem/web";

//document.oncontextmenu = function(){return false}

var modo = 1;

var cuenta = 121;
var cuentaRecarga = 1800;
setTimeout("regresivo();", 1000);

function regresivo() {
	cuenta--;
	cuentaRecarga--;
	//$('#cuenta').html(cuenta+"<br>"+cuentaRecarga)
	$('#cuenta').html(cuenta)
	
	if (cuenta==0){
		abrirInicio();
		if(cuentaRecarga<0)
			location.reload();
	}
	setTimeout("regresivo();", 1000);
}

function resetCuenta(){
	cuenta = 121;
}

function ajustarVideo(){

	//$('#Video1').css({left: 0});
	//$('#Video1').jQueryTween({ to: { width: '74%' }, yoyo: false });
	if(modo != 3){
		$('#Video1').tween({
		   left:{
		      start: 0,
		      stop: 5,
		      time: 0,
		      duration: 1,
		      units: 'vw'
		   },
		   width:{
		      start: 100,
		      stop: 90,
		      time: 0,
		      units: 'vw',
		      duration: 1,
		      effect:'easeInOut'
		   },
		    bottom:{
		      start: 0,
		      stop: 25,
		      time: 0,
		      units: 'vw',
		      duration: 1,
		      effect:'easeInOut'
		   }
		}).play();

		
		$('#divTouch').tween({
		   top:{
		      start: 0,
		      stop: -10,
		      time: 0,
		      duration: 1,
		      units: 'vh'
		   }
		}).play();
	}
	else{
		restaurarVideo();

	}

	modo = 2;
}


 function init() {
	var video = document.getElementById("Video1");                                               
	getVideo();
				
	var numeroVideo=0;
	//setTime(-10);
	
	// fail with message 
	video.addEventListener("error", function(err) {
		errMessage(err);
	}, true);

	//  button helper functions 
	//  skip forward, backward, or restart
	function setTime(tValue) {
	//  if no video is loaded, this throws an exception 
		try {
			if (tValue == 0) {
				video.currentTime = tValue;
			}
			else {
				video.currentTime += tValue;
			}
			
		 } catch (err) {
			 // errMessage(err) // show exception
		 errMessage("Video content might not be loaded");
		   }
	}
	 //  play video
	function vidplay() {
		//alert("1");
		//if (video.paused) {   // play the file, and display pause symbol
		//alert("funcion play");
		   video.play();
		/*else {              // pause the file, and display play symbol  
		   video.pause();
		}   */                                     
	}
	
	//document.getElementById("loadVideo").addEventListener("click", vidplay, false);
	
	
	video.addEventListener("ended", function () {
		//alert("este cuento se acabo");
		getVideo();
	}, false);
	
	//  load video file from input field
	function getVideo() {
		//alert("video/galaxi.webm");
		if(isNaN(numeroVideo))
			numeroVideo=0;
		numeroVideo++;
		//alert(numeroVideo);
		if(numeroVideo >5)
			numeroVideo=1;
		
			
		var nombreVideo="totem";	
		if(numeroVideo==1)
			nombreVideo="totem";
		if(numeroVideo==2)
			nombreVideo="totem";
		if(numeroVideo==3)
			nombreVideo="totem";
		if(numeroVideo==4)
			nombreVideo="totem";
		if(numeroVideo==5)
			nombreVideo="totem";

		var myVideo = document.createElement('video');
		
		if (myVideo.canPlayType('video/3pg'))
			extensionVideo='.3pg';
		/*else if (myVideo.canPlayType('video/webm'))
			extensionVideo='.webmsd.webm';
		else if (myVideo.canPlayType('video/ogg'))
			extensionVideo='.oggtheora.ogv';*/
		else if (myVideo.canPlayType('video/mp4'))
			extensionVideo='.mp4.mp4';
			
		var fileURL = url_video+"/bundles/app/videos/"+nombreVideo+extensionVideo;  // get input field             
		//alert(fileURL);
		if (fileURL != ""){
		   
		   video.src = fileURL;			   
		   video.load();  // if HTML source element is used
		   vidplay();
		   
		 } else {
			errMessage("Enter a valid video URL");  // fail silently
		 }
	}
	//  display an error message 
	function errMessage(msg) {
	// displays an error message for 5 seconds then clears it
		document.getElementById("errorMsg").textContent = msg;
		setTimeout("document.getElementById('errorMsg').textContent=''", 5000);
	}
	//getVideo(); //Activar para retomar video
}// end of master         


function mostrar(id, estilo)
{
	document.getElementById(id).style.display = estilo;
}

/*function detalles(id)
{
	document.getElementById("tr"+id).style.display = "";
	abrir(url_rasci+"ruta/"+id, "divDetalles"+id);
}*/

function abrirInicio(){
	resetCuenta();

	//$('#divVideo').jQueryTween({ to: { translate: { y: '0%' } }, yoyo: false });
	restaurarVideo();
	$('#divContenido').html("");
	
}

function restaurarVideo(){
	//$('#divVideo').jQueryTween({ to: { translate: { y: '200%' } }, yoyo: false });
	$('#Video1').tween({
	   left:{
	      start: 0,
	      stop: 0,
	      time: 0,
	      duration: 1,
	      units: 'px'
	   },
	   width:{
	      start: 38,
	      stop: 100,
	      time: 0,
	      units: 'vw',
	      duration: 1,
	      effect:'easeInOut'
	   }
	}).play();

	$('#iconos').tween({ 
	   width:{
	      start: 56,
	      stop: 100,
	      time: 0,
	      units: 'vw',
	      duration: 1,
	      effect:'easeInOut'
	   }
	}).play();

	$('#divTouch').tween({
	   top:{
	      start: -10,
	      stop: 0,
	      time: 0,
	      duration: 1,
	      units: 'vh'
	   }
	}).play();

	$('#divContenido').html("");

	modo = 1;

}


function minimizarVideo(){
	//$('#divVideo').jQueryTween({ to: { translate: { y: '200%' } }, yoyo: false });
	if(modo != 3)
		$('#Video1').tween({
		   left:{
		      start: 5,
		      stop: 0,
		      time: 0,
		      duration: 1,
		      units: 'px'
		   },
		   width:{
		      start: 90,
		      stop: 38,
		      time: 0,
		      units: 'vw',
		      duration: 1,
		      effect:'easeInOut'
		   },
		   bottom:{
		      start: 25,
		      stop: 0,
		      time: 0,
		      units: 'vw',
		      duration: 1,
		      effect:'easeInOut'
		   }
		}).play();

	if(modo != 3)
		$('#iconos').tween({ 
		   width:{
		      start: 100,
		      stop: 56,
		      time: 0,
		      units: 'vw',
		      duration: 1,
		      effect:'easeInOut'
		   }
		}).play();

	modo = 3;
}

function abrirTiendas(bajarVideo){
	resetCuenta();
	
	//$( "divVideo" ).html( "Next Step..." )
	if(bajarVideo)
		minimizarVideo();
		

	//document.getElementById("divVideo").style.top = "120vw";

	abrir(url_app+"niveles", "divContenido");
}

function abrirCartelera(bajarVideo){
	resetCuenta();
	
	//$( "divVideo" ).html( "Next Step..." )
	if(bajarVideo)
		minimizarVideo();

	//document.getElementById("divVideo").style.top = "120vw";

	abrir(url_app+"cartelera", "divContenido");
}

function abrirNoticias(bajarVideo){
	resetCuenta();
	
	//$( "divVideo" ).html( "Next Step..." )
	if(bajarVideo)
		minimizarVideo();

	//document.getElementById("divVideo").style.top = "120vw";

	abrir(url_app+"noticias", "divContenido");
}

function abrirPromociones(bajarVideo){
	resetCuenta();
	
	//$( "divVideo" ).html( "Next Step..." )
	if(bajarVideo)
		minimizarVideo();

	//document.getElementById("divVideo").style.top = "120vw";

	abrir(url_app+"promociones", "divContenido");
}

function seleccionarNivel(nivel){
	resetCuenta();
	
	$('#nivel').val(nivel);

	$('#spanNivel').html(nivel);

	$('#nivel1').removeClass('active');
	$('#nivel2').removeClass('active');
	$('#nivel3').removeClass('active');

	$('#nivel'+nivel).addClass('active');
	//alert($('#nivel'+nivel).class)

	abrir(url_app+"categoriasNivel/"+nivel+"/", "divCategorias");
}

function abrirCategoria(idCategoria){
	resetCuenta();
	
	var nivel = $('#nivel').val();
	abrir(url_app+"categorias/"+nivel+"/"+idCategoria, "divContenido");
}

function abrirLocales(idCategoria){
	resetCuenta();
	
	var nivel = $('#nivel').val();
	abrir(url_app+"locales/"+nivel+"/"+idCategoria, "divLocales");
}

function abrirLocal(idLocal){
	resetCuenta();
	
	var nivel = $('#nivel').val();
	abrir(url_app+"local/"+nivel+"/"+idLocal, "divLocales");
}

function mostarMapa(){
	resetCuenta();
	
	$('#divFoto').hide();
	$('#divMapa').show();
}

function mostarFoto(){
	resetCuenta();
	
	$('#divFoto').show();
	$('#divMapa').hide();
}



function mostrarTrailer(numero){
	resetCuenta();
	
	$('#texto'+numero).hide();
	$('#trailer'+numero).show();
}












function imagen(url, comentarios){
	document.getElementById("divImgAnuncio").innerHTML = '<img src="'+url_app+'bundles/cartelera/uploads/imgsAnuncios/'+url+'" class="imgAnuncio" alt="'+comentarios+'" title="'+comentarios+'" >';
}

function detalle(descripcion, informaion){
	document.getElementById("divImgAnuncio").innerHTML = '<div class="divDescripcion">'+descripcion+'</div><div class="divInformacion">'+informaion+'</div>';
}

// Función Literal
var iniciar = function () {
	//abrir("http://www.eltiempo.com/", "u6p1");
};