class Prestamos {
    constructor(nombre, monto, cuotas, logIn) {
        this.nombre = nombre;
        this.monto = monto;
        this.cuotas = cuotas;
        this.logIn = logIn;
    }
    beneficios() {
        if (this.logIn == "Si" || this.logIn == "SI" || this.logIn == "si") {
            console.log("¡Genial", this.nombre, "! iniciaste sesión! Tenés un 5% menos de intereses en tus prestamos");
        }
        else if (this.logIn == "No" || this.logIn == "NO" || this.logIn == "no") {
            console.log("Ups, para aprobechar los beneficios tenes que iniciar sesión");
        }
    }
    calculoIntereses(){
        if (this.cuotas <= 3 && (this.logIn == "Si" || this.logIn == "SI" || this.logIn == "si")){
            let interes = parseInt(this.monto) * 0.15;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            console.log("Querés un prestamo de", this.monto," en", this.cuotas,"cuotas.");
            console.log("¡Estas aprobechando los beneficios!");
            console.log("El prestamo tiene un interes total de 15% que serían", interes);
            console.log("El total a pagar es de", total,", lo que serían", totalCuotas, "por mes.");
        }
        else if (this.cuotas > 3 && this.cuotas <= 6 && (this.logIn == "Si" || this.logIn == "SI" || this.logIn == "si")){
            let interes = parseInt(this.monto) * 0.25;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            console.log("Querés un prestamo de", this.monto," en", this.cuotas,"cuotas.");
            console.log("¡Estas aprobechando los beneficios!");
            console.log("El prestamo tiene un interes total de 25%, que serían", interes);
            console.log("El total a pagar es de", total,", lo que serían", totalCuotas, "por mes.");
        }
        else if (this.cuotas > 6 && this.cuotas <= 12 && (this.logIn == "Si" || this.logIn == "SI" || this.logIn == "si")){
            let interes = parseInt(this.monto) * 0.35;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            console.log("Querés un prestamo de", this.monto," en", this.cuotas,"cuotas.");
            console.log("¡Estas aprobechando los beneficios!");
            console.log("El prestamo tiene un interes total de 35%, que serían", interes);
            console.log("El total a pagar es de", total,", lo que serían", totalCuotas, "por mes.");
        }
        else if (this.cuotas > 12 && (this.logIn == "Si" || this.logIn == "SI" || this.logIn == "si")){
            let interes = parseInt(this.monto) * 0.45;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            console.log("Querés un prestamo de", this.monto," en", this.cuotas,"cuotas.");
            console.log("¡Estas aprobechando los beneficios!");
            console.log("El prestamo tiene un interes total de 45%, que serían", interes);
            console.log("El total a pagar es de", total,", lo que serían", totalCuotas, "por mes.");
        }
        else if (this.cuotas <= 3){
            let interes = parseInt(this.monto) * 0.20;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            console.log("Querés un prestamo de", this.monto," en", this.cuotas,"cuotas.");
            console.log("¡Inicia sesión para aprovechar los beneficios!");
            console.log("El prestamo tiene un interes total de 20%, que serían", interes);
            console.log("El total a pagar es de", total,", lo que serían", totalCuotas, "por mes.");
        }
        else if (this.cuotas > 3 && this.cuotas <= 6){
            let interes = parseInt(this.monto) * 0.30;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            console.log("Querés un prestamo de", this.monto," en", this.cuotas,"cuotas.");
            console.log("¡Inicia sesión para aprovechar los beneficios!");
            console.log("El prestamo tiene un interes total de 30%, que serían", interes);
            console.log("El total a pagar es de", total,", lo que serían", totalCuotas, "por mes.");
        }
        else if (this.cuotas > 6 && this.cuotas <= 12){
            let interes = parseInt(this.monto) * 0.40;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            console.log("Querés un prestamo de", this.monto," en", this.cuotas,"cuotas.");
            console.log("¡Inicia sesión para aprovechar los beneficios!");
            console.log("El prestamo tiene un interes total de 40%, que serían", interes);
            console.log("El total a pagar es de", total,", lo que serían", totalCuotas, "por mes.");
        }
        else if (this.cuotas > 12){
            let interes = parseInt(this.monto) * 0.50;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            console.log("Querés un prestamo de", this.monto," en", this.cuotas,"cuotas.");
            console.log("¡Estas aprobechando los beneficios!");
            console.log("El prestamo tiene un interes total de 50%, que serían", interes);
            console.log("El total a pagar es de", total,", lo que serían", totalCuotas, "por mes.");
        }
    }
}


let listaInteracciones = [];

let seguir = prompt("Hola, ¿queres entrar en el simulador de prestamos?");

while (seguir == "SI" || seguir == "si" || seguir == "Si") {
    let nombre = prompt("Ingresa tu nombre");
    let monto = prompt("Ingresa el  monto");
    let cuotas = prompt("Ingresa las cuotas");
    let logIn = prompt("¿Iniciaste sesión?");
    let nuevoPrestamo = new Prestamos(nombre, monto, cuotas, logIn);
    listaInteracciones.push(nuevoPrestamo);
    seguir = prompt("¿Querés pedir otro prestamo?");
}

for(let nuevoPrestamo of listaInteracciones){
    console.log("Hola");
    nuevoPrestamo.beneficios();
    nuevoPrestamo.calculoIntereses();
    console.log("------");
}

console.log("Este es el array con las personas que pidieron un prestamo");
const personas = listaInteracciones.map((persona) => persona.nombre);
console.log(personas);
