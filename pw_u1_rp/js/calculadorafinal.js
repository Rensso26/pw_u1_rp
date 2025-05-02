let num1="";
let num2="";
let esSegundoDigito="0";


function mostrarEnDisplay(valor){
    let elementodisplay = document.getElementById('id_display');
    elementodisplay.innerText = elementodisplay.innerText + valor;
    if(valor !== "+") {
        concatenarNumero(valor);
    }else{
        operacionSumar();
    }
}

function operacionSumar() {
    esSegundoDigito = "1";
}

function concatenarNumero(numero){}

function sumar(num1,num2){
    return num1+num2;
}

function evaluar(){
    let resultado = 0;
    resultado = sumar(parseFloat(num1),parseFloat(num2))
    document.getElementById('id_resultado').innerText = document.getElementById('id_display').innerText + resultado;
}

function agregarvalor1(){
    num1= document.getElementById('id_resultado').innerText
}

function agregarvalor2(){
    num2= document.getElementById('id_resultado').innerText
}
