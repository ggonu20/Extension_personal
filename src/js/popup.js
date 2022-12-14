console.log("popup!")

//Funcion boton iniciar sesion
function i_sesion(){
    alert('iniciar sesion');
}

//Funcion boton buscar producto
function b_producto(){
    alert('buscar producto');
}

//Funcion boton opciones
function p_opciones(){
    //alert('Abriendo pagina opciones');
    chrome.runtime.openOptionsPage();
}

//Botones
document.getElementById('btn_1').onclick = i_sesion; 
document.getElementById('btn_2').onclick = b_producto; 
document.getElementById('btn_3').onclick = p_opciones; 