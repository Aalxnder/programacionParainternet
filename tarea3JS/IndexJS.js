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
        case (imc < 18.5):
        {
            resultado = "Peso insuficiente";
            document.getElementById("IMC").innerHTML = resultado;
            break;
        }
        case ((imc >= 18.5) && (imc <= 24.9)):
        {
            resultado = "Peso normal";
            document.getElementById("IMC").innerHTML = resultado;
            break;
        }
        case ((imc >= 25) && (imc <= 26.9)):
        {
            resultado = "Sobrepeso grado I";
            document.getElementById("IMC").innerHTML = resultado;
            break;
        }
        case ((imc >= 27) && (imc <= 29.9)):
        {
            resultado = "Sobrepeso grado II (preobesidad)";
            document.getElementById("IMC").innerHTML = resultado;
            break;
        }
        case ((imc >= 30) && (imc <= 34.9)):
        {
            resultado = "Obesidad tipo I";
            document.getElementById("IMC").innerHTML = resultado;
            break;
        }
        case ((imc >= 35) && (imc <= 39.9)):
        {
            resultado = "Obesidad tipo II";
            break;
        }
        case (imc >= 40):
        {
            resultado = "Obesidad tipo III (mórbida)";
            break;
        }
    }
}