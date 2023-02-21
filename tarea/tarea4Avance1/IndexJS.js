//mayor o menor de eda
function mayorMenor()
{
    resultado = "";
    var edad = document.getElementById("number").value;
    edad=parseInt(edad);
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
    }
}

function convertir()
{
    index = document.getElementById("select").selectedIndex;
    valor = document.getElementById("select").options[index].value;
    document.getElementById("valor").innerHTML = valor;

}