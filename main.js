const data = () => {
    let date = new Date()
    return date.getHours() <= 12 ? "Bom dia" : date.getHours() <= 18 ? "Boa tarde" : "Boa noite"
}
console.log(`Olá, ${data()}!`)
console.log("Hello, World!");