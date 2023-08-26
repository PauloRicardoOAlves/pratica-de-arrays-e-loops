const precos = [100, 500, 100, 200, 50]

let menor = precos[0]
let soma = 0

for (let i of precos) {
    if (menor >= i)
        menor = i
}
for (let j of precos) {
    soma += j
}
if (precos.length >= 5) {
    soma = soma - menor
    console.log(soma)
} else {
    console.log(soma)
}