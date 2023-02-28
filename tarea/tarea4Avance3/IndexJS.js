//mayor o menor de eda
function mayorMenor()
{
    resultado = "";
    var edad = document.getElementById("number").value;
    edad=parseInt(edad);
    while((isNaN(edad))||(edad < 0)||(edad > 120))
    {
        edad = prompt("Edad no valida, ingrese una edad valida");
        edad = parseInt(edad);
    }
    if((edad >= 18) && (edad >= 0))
    {
        resultado = "Eres mayor de edad";
    }
    else if((edad < 18)&&(edad <= 100))
    {
        resultado = "No Eres mayor de edad";
    }
    else
    {
        resultado = "edad no valida";
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function IMC()
{
    resultado = "";
    peso = document.getElementById("peso").value;
    peso=parseFloat(peso);
    altura = document.getElementById("altura").value;
    altura = parseFloat(altura);
    altura = altura/100;
    imc = peso/(altura*altura);
    switch(true)
    {
        case (imc < 16.1):
        {
            resultado = "desnutricion severa";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "red";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case((imc >= 16.1)&&(imc <18.5)):
        {
            resultado = "desnutricion moderada";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "orange";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case ((imc >= 18.5)&&(imc < 22)):
        {
            resultado = "Peso insuficiente";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "yellow";
            document.querySelector(".imcResultado").style.color = "black";
            break;
        }
        case ((imc >= 22) && (imc <= 24.9)):
        {
            resultado = "Peso normal";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "green";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case ((imc >= 25) && (imc <= 26.9)):
        {
            resultado = "Sobrepeso grado I";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "yellow";
            document.querySelector(".imcResultado").style.color = "black";
            break;
        }
        case ((imc >= 27) && (imc <= 29.9)):
        {
            resultado = "Sobrepeso grado II (preobesidad)";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "orange";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case ((imc >= 30) && (imc <= 34.9)):
        {
            resultado = "Obesidad tipo I";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "darkorange";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case ((imc >= 35) && (imc <= 39.9)):
        {
            resultado = "Obesidad tipo II";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "red";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case (imc >= 40):
        {
            resultado = "Obesidad tipo III (mórbida)";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "darkred";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        default:
        {
            resultado = "No se pudo calcular el IMC";
        }
    }
}

function conversor()
{
    //leer datos
    var grados = document.getElementById("entrada").value;
    grados = parseFloat(grados);
    var resultado = 0;
    //tomar los valores de los select
    var index1 = document.getElementById("select").selectedIndex;
    var opcion1 = document.getElementById("select").options[index1].value;

    var index2 = document.getElementById("select2").selectedIndex;
    var opcion2 = document.getElementById("select2").options[index2].value;

    //opciones posibles
    switch (true)
    {
        case(opcion1 == 0):
        {
            if(opcion2 == 0)
            {
                resultado = grados;
            }
            if(opcion2 == 1)
            {
                valor = (grados * 1.8)+32;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 2)
            {
                valor = grados + 273.15;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 3)
            {
                valor = (grados + 273.15)*1.8;
                resultado = valor.toFixed(2);
            }
            //poner en el input el resultado
            input =document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        case (opcion1 == 1):
        {
            if(opcion2 == 0)
            {
                valor = (grados - 32)/1.8;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 1)
            {
                resultado = grados;
            }
            if(opcion2 == 2)
            {
                valor = ((grados - 32)/1.8)+273.15;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 3)
            {
                valor = grados + 459.67;
                resultado = valor.toFixed(2);
            }
            //poner en el input el resultado
            input =document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        case (opcion1 == 2):
        {
            if(opcion2 == 0)
            {
                valor = grados - 273.15;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 1)
            {
                valor = ((grados - 273.15)*1.8)+32;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 2)
            {
                resultado = grados;
            }
            if(opcion2 == 3)
            {
                valor = grados*1.8;
                resultado = valor.toFixed(2);
            }
            input =document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        case (opcion1 == 3):
        {
            if(opcion2 == 0)
            {
                valor = (grados-491.67)*1.8;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 1)
            {
                valor = grados - 459.67;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 2)
            {
                valor = grados *1.8;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 3)
            {
                resultado = grados;
            }
            input = document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        default:
        {
            resultado = "No se pudo realizar la conversion";
            break;
        }
    }
}

//escuchar cuando se cargue el documento
window.addEventListener('load', ()=>
{
    //funcion
    const display = document.querySelector('.display');
    const KeypadButtons = document.getElementsByClassName('keypadButtons');

    const keypadButtonsArray = Array.from(KeypadButtons);

    keypadButtonsArray.forEach((button)=>{
        button.addEventListener('click', (e)=>
        {
            calculadora(button, display);
        })
    })
})

function calculadora(button, display)
{
    switch(button.innerHTML)
    {
        case 'C':
        {
            borrar(display);
            break;
        }
        case '=':
        {
            calcular(display);
            break;
        }
        default:
        {
            actualizar(display, button);
            break;
        }
    }
}

function calcular(display)
{
    display.innerHTML = eval(display.innerHTML); //resolver la operacion
}
function  actualizar(display, button)
{
    if(display.innerHTML == 0)
    {
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
}
function borrar(display)
{
    display.innerHTML = 0;
}