function pesosadolares(){
    let pesos = Number(prompt("Digite cuantos pesos tiene: "))
    let dolares = Number(prompt("Ingrese a como esta el dolar: "))
    return `La conversión de ${pesos} pesos es: ${pesos/dolares} dolares`

}
function Temperatura(){
    let C = Number(prompt("Digite cuantos grados hay"))
    return `Los ${C} grados centigrados son en ${C*9/5+32} Farenheit`
}
function KmaMillas(){
    let Km = Number(prompt("Digite la cantidad de Km"))
    return `${Km} Kilometros son ${Km * 0.621371} millas`
}
function Segundosahoras(){
    let Segundos = Number(prompt("Digite la cantidad de segundos"))
    return `${Segundos} segundos son ${Segundos/3600} horas`
}

let opc = prompt("Menú\n1. Pesos a Dolares\n2. °C a °F\n3. KM a Millas\n4. Segundos a Horas\n0. Salir")
while (opc !=0){
    switch (opc){
        case "1":
            console.log(pesosadolares())
            break
        case "2":
            console.log(Temperatura())
            break
        case "3":
            console.log(KmaMillas())
            break
        case "4":
            console.log(Segundosahoras())
            break
        default:
            console.log("Debes elegir una opción entre 0 y 4");
    }
    opc = prompt("Menú\n1. Pesos a Dolares\n2. °C a °F\n3. KM a Millas\n4. Segundos a Horas\n0. Salir")
}