console.log("popup!")

//Funcion boton iniciar sesion
function i_sesion(){
    alert('iniciar sesion');
}

//Funcion boton buscar producto
function b_producto(){
    alert('buscar producto');
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        console.log(tab.url);
        //alert(tab.url);
        buscar(tab.url);
    });
}

//Funcion boton opciones
function p_opciones(){
    //alert('Abriendo pagina opciones');
    chrome.runtime.openOptionsPage();
}

//funcion get url como texto
function buscar(url){
    var arr = fetch(url)
    .then(response =>response.text())
    .then(data =>console.log(data));
}


//Botones
document.getElementById('btn_1').onclick = i_sesion; 
document.getElementById('btn_2').onclick = b_producto; 
document.getElementById('btn_3').onclick = p_opciones; 