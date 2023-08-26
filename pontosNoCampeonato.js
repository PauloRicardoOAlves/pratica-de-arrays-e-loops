const resultados = ["V", "E", "V", "E", "V"]

let pontos = 0

for (let i of resultados) {
    if (i == "V") {
        pontos += 3
    } else if (i == "E") {
        pontos += 1
    }
}
console.log(pontos)