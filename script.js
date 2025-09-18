//declarams las varables que van a contener los botones del html
const button1 = addEventListener.getByListener("button1");
const button2 = addEventListener.getByListener("button2");
const button3 = addEventListener.getByListener("button3");
const button4 = addEventListener.getByListener("button4");

//esta es una validacion para ver si los botones funcionan
if(button1.addEventListener > 0) {
    alert("el primer boton funciona");
}else{
    alert("el boton no funciona");
}


