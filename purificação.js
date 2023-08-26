precos = [100, 100, 50, 100]

let menor = precos[0]
let soma = 0



for (let i of precos) {
    if (menor >= i) {
        menor = i
    }
}
    if (precos.length >= 5) {
        for (let j of precos) {
            soma = soma + j
        }
        soma = soma - menor
        console.log(soma)
    } else {
        for (let h of precos) {
            soma = soma + h
        } console.log(soma)
    }
