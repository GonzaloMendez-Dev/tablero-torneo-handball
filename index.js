let botonInicio = document.getElementById('inicio');
let botonPausa = document.getElementById('pausar');
let botonReiniciar = document.getElementById('reiniciar');
let botonSumarLocal = document.getElementById('sumar-local');
let botonRestarLocal = document.getElementById('restar-local');
let botonSumarVisita = document.getElementById('sumar-visita');
let botonRestarVisita = document.getElementById('restar-visita');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let tiempo = document.getElementById('tiempo');
let golesLocal = document.getElementById('goles-local');
let golesVisita = document.getElementById('goles-visita');
let equipoLocal = document.getElementById('equipo-local');
let equipoVisitante = document.getElementById('equipo-visitante');

let equipos = ["../img/25DeMayo.png",
    "../img/capuchinos.png",
    "../img/cpef.png",
    "../img/diamantino.png",
    "../img/donBosco.png",
    "../img/Ferrocarril.png",
    "../img/JuventudUnida.png",
    "../img/LasFlores.png",
    "../img/Paracao.png",
    "../img/SUA.png"];


let valorMinutos = 30;
let valorSegundos = 0;
let intervalo;


const iniciar = () => {
    if (!intervalo) {
        intervalo = setInterval(actualizarCronometro, 1000);
    }
}
const pausar = () => {
    clearInterval(intervalo);
    intervalo = null;

}

const reiniciar = () => {
    clearInterval(intervalo);
    intervalo = null;
    valorMinutos = 30;
    valorSegundos = 0;
    minutos.textContent = '30';
    segundos.textContent = '00';
}

const actualizarCronometro = () => {
    if (segundos.textContent == '00' && minutos.textContent == '00' || segundos.textContent == '00' && minutos.textContent == '0') {
        return
    } else {
        if (segundos.textContent == '00') {
            valorSegundos--
            let s = valorSegundos < 10 ? '0' + valorSegundos : valorSegundos;
            segundos.textContent = s;

            valorSegundos = 59;
            segundos.textContent = valorSegundos;
            valorMinutos--
            /*let m = valorMinutos < 10 ? '0' + valorMinutos : valorMinutos;*/
            minutos.textContent = valorMinutos;
        } else {
            valorSegundos--
            let s = valorSegundos < 10 ? '0' + valorSegundos : valorSegundos;
            segundos.textContent = s;

        }
    }

}


equipoLocal.addEventListener('click', () => {

    let nombreEquipo = equipoLocal.src;
    let source = nombreEquipo.split("/img");
    let posicion = equipos.indexOf("../img" + source[1]);
    if (posicion === equipos.length - 1) {
        posicion = 0;
        let equipo = equipos[posicion];
        return equipoLocal.src = equipo;
    }
    let equipo = equipos[posicion + 1];
    return equipoLocal.src = equipo;
})

equipoVisitante.addEventListener('click', () => {

    let nombreEquipo = equipoVisitante.src;
    let source = nombreEquipo.split("/img");
    let posicion = equipos.indexOf("../img" + source[1]);
    if (posicion === equipos.length - 1) {
        posicion = 0;
        let equipo = equipos[posicion];
        return equipoVisitante.src = equipo;
    }
    let equipo = equipos[posicion + 1];
    return equipoVisitante.src = equipo;
})

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') { iniciar() };

})

document.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') { pausar() };

})

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyR') { reiniciar() };

})

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
        let goles = parseInt(golesLocal.textContent)
        goles += 1;
        golesLocal.textContent = goles;
    };

})

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowDown') {
        let goles = parseInt(golesLocal.textContent)
        if (goles === 0) return
        goles -= 1;
        golesLocal.textContent = goles;
    };

})

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        let goles = parseInt(golesVisita.textContent)
        goles += 1;
        golesVisita.textContent = goles;
    }

})

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
        let goles = parseInt(golesVisita.textContent)
        if (goles === 0) return
        goles -= 1;
        golesVisita.textContent = goles;
    };

})

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyP' && minutos.textContent !== '30') {
        valorMinutos++
        minutos.textContent = valorMinutos;
    }

})

document.addEventListener('keydown', (event) => {
    if (minutos.textContent == '0' || minutos.textContent == '00') {
        return
    } else {
        if (event.code === 'KeyO' && minutos.textContent != '0') {
            valorMinutos--
            minutos.textContent = valorMinutos;
        };
    }
})

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyL' && segundos.textContent !== '59') {
        if (minutos.textContent == '30') {
            return
        } else {
            valorSegundos++
            let s = valorSegundos < 10 ? '0' + valorSegundos : valorSegundos;
            segundos.textContent = s;
        }

    };

})

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyK' && segundos.textContent != '0' && segundos.textContent != '00') {
        valorSegundos--
        let s = valorSegundos < 10 ? '0' + valorSegundos : valorSegundos;
        segundos.textContent = s;
    } else return;

});

if (valorMinutos == 0) {
    pausar();
}