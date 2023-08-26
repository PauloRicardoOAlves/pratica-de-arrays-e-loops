const palpite = "m"
const palavra = "aaçodmghp"

let contagem = 0

for (let i of palavra) {
    if (i == palpite) {
        contagem++
    }
}
console.log(contagem)