// Helpers
function isPair(number) {
    return (number % 2 === 0);
}

function mediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (isPair(lista.length)) {
        const a = lista[mitad - 1];
        const b = lista[mitad];

        const mediana = mediaAritmetica([a, b]);
        return mediana;
    } else {
    const halfPearson = lista[mitad];
        return halfPearson;
    }
}

// Mediana General
const salariosArg = argentina.map(
    function (pearson) {
    return pearson.salary;
    }
);

const salariosArgSorted = salariosArg.sort(
    function (salaryA, salaryB) {
    return salaryA - salaryB;
    }
);

const medianaGeneralArg = medianaSalarios(salariosArgSorted);

// Mediana del top 10%
const spliceStart = (salariosArgSorted.length * 90) / 100;
const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgTop10 = salariosArgSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Arg = medianaSalarios(salariosArgTop10);


function averageSalary(){
    const averageTotal = document.getElementById('median')
    const averageTotal10 = document.getElementById('median10')
    averageTotal.innerText = medianaGeneralArg
    averageTotal10.innerText = medianaTop10Arg
}


console.log({
    medianaGeneralArg,
    medianaTop10Arg,
});
