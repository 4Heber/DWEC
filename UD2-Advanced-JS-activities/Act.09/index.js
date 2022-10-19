var inputField = document.getElementById('string_in');
var button = document.getElementById('button');
var outputTxt = document.getElementById('output');


console.log(inputField.value.charAt(0).charCodeAt(0));
console.log(inputField.value.length);

button.addEventListener('click',()=>{
    var upperChar = 0;
    var lowerChar = 0;

    for (i = 0; i < inputField.value.length; i++) {
    
        // Uppercase ASCII values in range [65 - 90]
        for (j = 65; j <= 90; j++) {
            if (inputField.value.charAt(i).charCodeAt(0) == j) {
                upperChar++;
                j = 999;
            }
        }
        // Lowercase ASCII values in range [97 - 122]
        for (k = 97; k <= 122; k++) {
            if (inputField.value.charAt(i).charCodeAt(0) == k) {
                lowerChar++;
                k = 999;
            }
        }
    }
    
    console.log("up " + upperChar, "low " + lowerChar);
    
    if (upperChar == 0 && lowerChar > 0) {
        outputTxt.textContent = "El texto solo contiene minúsculas.";
    }
    else if (upperChar > 0 && lowerChar == 0) {
        outputTxt.textContent = "El texto solo contiene mayúsculas.";
    }
    else if (upperChar > 0 && lowerChar > 0) {
        outputTxt.textContent = "El texto contiene tanto minúsculas como mayúsculas.";
    }
    else {
        outputTxt.textContent = "";
    }
})

