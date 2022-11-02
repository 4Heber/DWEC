// DWEC - Activities JS - 10
// Comprobar mediante función si el string es un palindromo.

var button = document.getElementById('bttn_check');
var inputField = document.getElementById('sentence');
var txtOutput = document.getElementById('output');

console.log(typeof inputField.value);

function palindromo(sentence){
    var counter = 0;
    sentence = sentence.trim().split('');

    try{
        let index = 0;

        for(i=sentence.length-1; i>=0; i--, index++){
            if(sentence[index] != sentence[i]){
                counter++;
            }
        }
    
        if(counter == 0){
            txtOutput.innerHTML = 'El texto es un palindromo';
            console.log('ok')
        }
        else{
            txtOutput.innerHTML = 'El texto NO es un palindromo';
            console.log('not ok')
        }

    }catch(e){
        throw new Error('Error on function "palindromo" ' + e);
    }
}

button.addEventListener("click", ()=>{
    if(inputField.value != ""){
        palindromo(inputField.value);
    }
    else{
        txtOutput.innerHTML = 'Introduce un texto...'
    }
});







