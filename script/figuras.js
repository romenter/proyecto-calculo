const PI = Math.PI;

// cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const perimetroSquare = document.getElementById('texto_perimetro')
    perimetroSquare.innerText = perimetro.toFixed(2)
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const area = areaCuadrado(value);
    const areaSquare = document.getElementById('texto_area')
    areaSquare.innerText = area.toFixed(1)
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
    
    const perimetro_triangulo = document.getElementById('textot_perimetro')
    perimetro_triangulo.innerText = perimetro.toFixed(1)
} //area triangulo
function calcularAreaTriangulo(){
    const input4 = document.getElementById("inputC");
    const input3 = document.getElementById("Altura");
    const alt = Number(input3.value);
    const ladoC = Number(input4.value);
    const area = areaTriangulo(ladoC, alt);

    const area_triangulo = document.getElementById('textot_area')
    area_triangulo.innerText = area.toFixed(1)
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
    const textoi_altura = document.getElementById('textoi_altura')
    textoi_altura.innerText = alt.toFixed(1)
}
function calcularPerimetroTrianguloIsoseles(){
    const inputA = document.getElementById("input1");
    const inputB = document.getElementById("input2");
    const inputC = document.getElementById("input3");
    const input1 = parseFloat(inputA.value);
    const input2 = parseFloat(inputB.value);
    const input3 = parseFloat(inputC.value);
    const perimetro = perimetroTriangulo(input1,input2,input3)
    const textoi_perimetro = document.getElementById('textoi_perimetro')
    textoi_perimetro.innerText = perimetro.toFixed(1)
}
function calcularAreaTrianguloIsoseles(){
    const inputA = document.getElementById("input1");
    const inputB = document.getElementById("input2");
    const inputC = document.getElementById("input3");
    const input1 = Number(inputA.value);
    const input2 = Number(inputB.value);
    const input3 = Number(inputC.value);
    const alt = altura(input1, input2, input3);
    const area = areaTriangulo(input3, alt);
    const textoi_area = document.getElementById('textoi_area')
    textoi_area.innerText = area.toFixed(1)
}




// circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const radio = parseFloat(input.value)
    const perimetro = perimetroCircle(radio)
    const circle_perimetro = document.getElementById('circle_perimetro')
    circle_perimetro.innerText = perimetro.toFixed(3)
}
function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const radio = parseFloat(input.value)
    const area = areaCircle(diametreCircle(radio))
    const circle_area = document.getElementById('circle_area')
    circle_area.innerText = area.toFixed(3)
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
    return  (inputC * altura)/2;
    
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