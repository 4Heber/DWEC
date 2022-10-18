
var valores = [true, 5, false, "hola", "adios", 2];
valores.forEach((element)=>{
    let value = document.createElement("p");
    value.appendChild(document.createTextNode(element));
    document.body.appendChild(value); 
})

// 1. Determinar cuál de los dos elementos de texto es mayor

// var output01 = "1. El elemento de texto de mayor tamaño está situado en la posición ";
// var big = 0;

// for(var i=0; i<=valores.length; i++){
//     if(typeof(valores[i]) == "string" && valores[i].length > big){
//         big = i;
//     }
// }

// output01 += big + `: "${valores[big]}"`;

// var result = document.createElement("h1");
// result.appendChild(document.createTextNode(output01));
// document.body.appendChild(result);

// 2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false

var output02 = "";
for(let i=0; i < valores.length; i++){
    output02 = "El valor booleano del índice "+i+" es: " +  !(valores[i]);

    let result02 = document.createElement("h1");
    result02.appendChild(document.createTextNode(output02));
    document.body.appendChild(result02);
}

// 3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

var operand0 = null;
var operand1 = 0;

for(let k=0; k < valores.length; k++){
    if(Number.isInteger(valores[k])){
        if(operand0 != null){
            operand1 = valores[k];
        } else{
            operand0 = valores[k];
        }
    }
}

var result03 = document.createElement("h1");
result03.appendChild(document.createTextNode("Resultado de las cinco operaciones matemáticas de los digitos: "+ operand0 +" y "+ operand1));
document.body.appendChild(result03);

console.log(operand0, operand1);