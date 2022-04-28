let arrayList = []


//Empuje de numeros
function pushNumbers (){
    const numero = document.getElementById("pushNumbers");
    const number = Number(numero.value);
    
    const addNumber = arrayList.push(number);

    const cantidad = document.getElementById("quantity")
    cantidad.innerText = addNumber

    const arrays = document.getElementById("arrElements")
    arrays.innerText = arrayList;
}
//Ordenador de numeros
function orderList(){
    const numbers = arrayList;
    numbers.sort((a,b) => a - b)

    const orderList = document.getElementById('order');
    orderList.innerText = numbers;
}



//----------------Promedio----------------------------
function averageArray() {
    const addList = arrayList.reduce(function
        (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        })
    

    const averageList = addList / arrayList.length;

    const averagePass = document.getElementById('average');
    averagePass.innerText = `Our average is ${Math.floor(averageList)}`;
}


//---------------Mediana---------------------
function getMedian(){
    const numbers = arrayList;
    numbers.sort((a,b) => a - b);
    
    const halfArrayList = parseInt(numbers.length / 2);
    const halfArrayListTwo = halfArrayList - 1; 

    if(numbers.length % 2 === 0){
        const sumaBoth = (numbers[halfArrayList] + numbers[halfArrayListTwo]) /2;
        const devolucion1 = document.getElementById('median');
        devolucion1.innerText = sumaBoth;
    }else{
        const nReal = numbers[halfArrayList];
        const devolucion1 = document.getElementById('median');
        devolucion1.innerText = nReal;
    }
}

//--------------Moda-------------------------
// function getModa(){
//     const listModaObject = {};

//     const passModa = document.getElementById('moda');


//     const arrayCalc = arrayList.map(e => listModaObject[e] = (listModaObject[e]) ? listModaObject[e] += 1 : 1);
    
//     Object.entries(arrayCalc).sort(  //Object.entries -> convertidor de objetos {} a arrays []
//         (a, b) => {a[1]-b[1]
//         }                                                       // .sort(function(a,b){a-b}) ==es igual a== .sort((a,b) => a-b)
//     );

//     const moda = arrayCalc.filter((elemento) => elemento === valorAContar).length;
//     passModa.innerText = `[${moda}]`

// }

function calcularModa(lista){
    const listaCount = {};
    lista.map(
        function (elemento){
            if (listaCount[elemento]){
                listaCount[elemento]+=1
            }
            else{
                listaCount[elemento]=1;
            }       
        }
    );
    const listaArray = Object.entries(listaCount).sort( 
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]; 
        }
    );
    const moda = listaArray[listaArray.length - 1];
    
    const modaFinal = "The mode is: " +moda[0] + " and it repeat " + moda[1] + " times";
    
    const moda1 = document.getElementById('moda1');
    moda1.innerText = modaFinal
} 

//Promedio ponderado --> Tarea pendiente
/*
* Datos a tener en cuenta
* Poder elegir la cantidad de promedios, y que cada uno de ellos se sumen y 
*  se dividan por su misma cantidad
* Luego de ponderar cada uno por separado, sumar todos los ponderados, y dividirlo por
* cantidad de ponderados
* REUTILIZAR la formula de promedio.
*/