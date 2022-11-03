//las funciones deben tener un parentesis junto a el nombre
function operacionesbasicas(){
alert ("Algoritmo para realizar operaciones basicas")
var S;
var R;
var D;
var M;
A = parseInt(prompt("Ingrese primer numero"));
B = parseInt(prompt("Ingrese segundo numero"));
S = A + B;
R = A - B;
M = A * B;
D = A / B;
alert ("La suma es:  " + S)
alert ("La resta es:  " + R)
alert ("La multiplicacion es:  " + M) 
alert ("La division es:  " + D)
}

function Cuadradodeunnumero(){
    alert("Algoritmo para saber el cuadrado de un numero")
    var A = 0;
    var C = 0;
    A = parseInt(prompt("Ingrese el numero a validar"));
    C = A * A;
    alert("El cuadrado del numero ingresado es: " + C);

}
function Areadeuntriangulo(){
    alert ("Algoritmo para saber el area de un triangulo")
    var B;
    var H;
    var igual;
    B = parseInt(prompt(" Escriba la base del triangulo" ));
    H = parseInt(prompt(" Escriba la altura del triangulo" ));
    igual = (B * H)/2
    alert(" El area del trianguo es: " + igual);
}

function ConversionUnidades(){
    var P;
    var C;
    var K;

    P = parseInt(prompt("Ingrese Pulgadas"))
    C = P * 2.54
    K = P * (1 / 39370) * (1 / 1000)
    alert("Las pulgadas en centimetros es: " + C);
    alert("Las pulgadas en kilometros es: " + K);
}

function Serviciomilitar(){
    alert("Algoritmo para saber si soy apto para presta el servicio militar")
    var Edad = parseInt(prompt("Por favor ingrese su edad"))
    var Genero = prompt("Por favor ingresar Masculino o Femenino");

    if(Genero == "Femenino"){
        alert("No eres apta para prestar el servicio militar");
    } else{
        if(Edad>17 && Edad<25){
            alert("Eres Apto para prestar el servicio militar");
        }else{
            alert("No eres apto por edad")
        }
    }

}
function Añodenacimiento(){
    alert("Algoritmo para saber en que año nacio")
    var Actual;
    var Edad;
    
    Edad = parseInt(prompt("Ingrese su edad"));
    Actual = 2022 - Edad;
    alert("El año en que nacio es: " + Actual)

}   
function Promedio(){
alert("Algoritmo para saber si aprobo o reprobo el  estudiante")
var S; 
var P;
var nota1 = parseInt(prompt("Por favor ingrese su primera nota"))                                                                                                
var nota2 = parseInt(prompt("Por favor ingrese su segunda nota"))  
var nota3 = parseInt(prompt("Por favor ingrese su tercera nota"))  
var nota4 = parseInt(prompt("Por favor ingrese su cuarta nota"))  
var nota5 = parseInt(prompt("Por favor ingrese su quinta nota"))  
var nota6 = parseInt(prompt("Por favor ingrese su sexta nota"))  
var nota7 = parseInt(prompt("Por favor ingrese su septima nota")) 
S = nota1+nota2+nota3+nota4+nota5+nota6+nota7;
P = S / 7
 alert ("Su promedio es: " + P);

if (P>2 && P<6) {
    alert("Aprobo");
    
} else { 
    alert("Reprobo ")
    
}
}
function Inversion(){
    alert("Algotimo para saber cuanto dinero ganara despues de n° años ")
    var inver;
    var ano;
    var gana;

    inver = parseInt(prompt("Ingrese el valor a invertir"));
    ano = parseInt(prompt("Ingrese los años"));
    gana = inver * 0.008
    ano1 = ano * 12
    total1 = ano1 + gana
    total2 =total1 + inver
    alert ("El valor de sus ganancias es de:  " + total1 )
    alert ("el total de su inversion y sus ganancias son de:   " + total2)
}
function VentaDescuentos(){
    alert ("algoritmo para saber cuanto descuento recibe")
var kilos;
var div;
var div2;
var div3;
var tpagar;
var tpagar2;
var tpagar3;

kilos = parseInt(prompt("Ingrese numero de kilos"))
div = (10/100)*4500;
tpagar = 4500 - div;
div2 =(15/100)*4500;
tpagar2 = 4500 - div2;
div3 =(20/100)*4500;
tpagar3 = 4500 - div3;

if (kilos>0 && kilos<3) {
  alert ("No recibe descuento");
  alert ("El total a pagar es : $4500");
}
else{
    if (kilos>2 && kilos<6) {
        alert ("Recibe un descuento de 10% a su compra se le descuenta: " + div );
        alert ("El total a pagar es: $ " +tpagar);
      }
      
    if(kilos>5 && kilos<11) {
        alert("Recibe un descuento de 15% a su compra se le descuenta: " + div2);
        alert ("El total a pagar es: $ " +tpagar2);
    }
    if (kilos>10) {
        alert ("Recibe un descuento de 20% a su compra se le descuenta: " + div3);
        alert ("El total a pagar es: $ " +tpagar3);
        
    }
}
}

function Cantdigitosnumero(){
    alert ("Algoritmos para saber la cantidad de digitos de un numero")
    
    Num = parseInt(prompt(" Por favor ingrese el numero a calcular los digitos"));
    contador = 1;
    control = 10;

    while (control <= Num) {
        contador = contador + 1;
        control = control *10
        
    }
    alert ("La cantidad de digitos de el numero es:  " + contador);

}

function SalarioSemanal(){
    alert ("Algoritmo para saber su salario semanal")
    var traba;
    var total;
    var horas;
    traba = parseInt(prompt("Ingrese el numero de horas trabajadas"))
    if (traba < 40) {
        total = traba *10000
    }else {

     horas = traba - 40;
      total = (40*10000) + (horas*20000)

  }
 alert("El pago semanal por las horas trabajadas es: $ " + total)
}









