const letra = "m"
const palavras = ["navio", "maca", "melao", "melancia", "laranja"]
let contagem = 0

for (let i of palavras) {
    if (i.startsWith(letra) == true) {
    } else {
        contagem++
    }
}
console.log(contagem)