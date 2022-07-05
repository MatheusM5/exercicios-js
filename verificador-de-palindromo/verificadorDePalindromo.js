// solução 1
function verificaPalindromo(string) {
    if(!string) return "string inexistente!";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"))

// solução 2
function verificaPalindromo2(string) {
    if(!string) return "string inexistente!";
    
    for(let i = 0; i < string.length / 2; i++) { 
        if(string[i] !== string[string.length - 1 - i]) {
        return console.log("não é um palíndromo!");
        }
    }

    return console.log("é um palíndromo!");
}

verificaPalindromo2("ama")