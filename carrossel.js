const sequencia = ">>><>"

let botao = 0
let indice = 0
for (let i of sequencia) {
    if (i == ">") {
        indice = i.indexOf() + 1
    } else if (i == "<") {
        indice = i.indexOf() - 1
    }
}
console.log(indice)