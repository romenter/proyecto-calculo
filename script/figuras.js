const PI = Math.PI;




// cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputA");
    const input2 = document.getElementById("inputB");
    const input3 = document.getElementById("inputC");
    const ladoA = parseFloat(input1.value);
    const ladoB = parseFloat(input2.value);
    const ladoC = parseFloat(input3.value);
    const perimetro = perimetroTriangulo(ladoA,ladoB,ladoC)
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input4 = document.getElementById("inputC");
    const input3 = document.getElementById("Altura");
    const Altura = parseFloat(input4.value);
    const ladoC = parseFloat(input3.value);
    const area = areaTriangulo(ladoC, Altura);
    alert(area);
}
// triangulo isoseles
function Altura(){
    const inputA = document.getElementById("input1");
    const inputB = document.getElementById("input2");
    const inputC = document.getElementById("input3");
    const input1 = parseFloat(inputA.value);
    const input2 = parseFloat(inputB.value);
    const input3 = parseFloat(inputC.value);
    const alt = altura(input1, input2, input3)
    alert(alt)
}
function calcularPerimetroTrianguloIsoseles(){
    const inputA = document.getElementById("input1");
    const inputB = document.getElementById("input2");
    const inputC = document.getElementById("input3");
    const input1 = parseFloat(inputA.value);
    const input2 = parseFloat(inputB.value);
    const input3 = parseFloat(inputC.value);
    const perimetro = perimetroTriangulo(input1,input2,input3)
    alert(perimetro)
}

function calcularAreaTrianguloIsoseles(){
    const inputA = document.getElementById("input1");
    const inputB = document.getElementById("input2");
    const inputC = document.getElementById("input3");
    const input1 = parseFloat(inputA.value);
    const input2 = parseFloat(inputB.value);
    const input3 = parseFloat(inputC.value);
    const alt = altura(input1, input2, input3);
    const area = areaTriangulo(input3, alt);
    alert(area)
}
// circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const radio = parseFloat(input.value)
    const perimetro = perimetroCircle(radio)
    alert(perimetro)
}
function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const radio = parseFloat(input.value)
    const area = areaCircle(diametreCircle(radio))
    alert(area)
}














//------------------------------------------

//Encapsulamiento cuadrado
function perimetroCuadrado (lado){
    return perimetroCuadrado = lado*4;
}
function areaCuadrado (lado){
    return areaCuadrado = lado**2;
}

//Encapsulamiento triangulo
function perimetroTriangulo (ladoA, ladoB, ladoC){
    return ladoA + ladoB + ladoC;
}
function areaTriangulo (inputC, altura){
    return areaTriangulo = (inputC * altura)/2;
    
}

//Encapsulamiento triangulo isoseles

function altura(A, B, C) {
    if (A != B) {
        alert('Lado A y lado B no son iguales')
    } else {
        const b = C / 2;
        const c = A;
        const a = Math.sqrt((c**2) - (b**2));
        //a = altura
        return a;
    }
}

//Encapsulamiento circulo
function diametreCircle (radio){
    diametreCircle = radio * 2;
    return diametreCircle
}
function perimetroCircle (radio){
    return 2 * PI * radio
}
function areaCircle (radio){
    return (radio ** 2) * PI;
}