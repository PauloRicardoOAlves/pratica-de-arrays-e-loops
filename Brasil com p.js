const primeiraLetra = "b"
const segundaLetra = "v"
const palavras = ["aveia", "manha", "ave"]
let j = 0


for (let i of palavras) {
    if (i.startsWith(primeiraLetra) == true && i.startsWith(segundaLetra, 1) == true) {
        console.log(i)
        j++
    } 
}
if(j == 0){
    console.log("NENHUMA")
}