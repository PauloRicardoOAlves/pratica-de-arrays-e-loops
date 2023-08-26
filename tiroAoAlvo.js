const disparos = [0, 10, 50, 70, 80, 30]

let contagem = 0

for (let i of disparos) {
    if (i >= 70) {
        contagem++
    }
}
if (contagem >= 3) {
    console.log(contagem)
} else {
    console.log("ELIMINADO")
}