/*Prueba de mis movimientos


const coche = document.getElementById("car");
let posicionX = 0;
let posicionY = 150;
let puntuacion = 0;

document.addEventListener("keydown", function(event) {
  event.preventDefault();

  if (event.code === "ArrowRight") {
    if (posicionX < 300) {
      posicionX += 10;
      coche.style.left = posicionX + "px";
      actualizarPuntuacion();
      verificarMeta();
    }
  } else if (event.code === "ArrowUp") {
    if (posicionY > 0) {
      posicionY -= 10;
      coche.style.top = posicionY + "px";
      actualizarPuntuacion();
      verificarMeta();
    }
  } else if (event.code === "ArrowDown") {
    const pistaHeight = document.getElementById("pista").offsetHeight;
    const cocheHeight = coche.offsetHeight;
    if (posicionY + cocheHeight < pistaHeight) {
      posicionY += 10;
      coche.style.top = posicionY + "px";
      actualizarPuntuacion();
      verificarMeta();
    }
  }
});

function actualizarPuntuacion() {
  puntuacion++;
  document.getElementById("score").innerText = puntuacion;
}

function verificarMeta() {
  const lineaMeta = document.getElementById("finish-line");
  if (posicionX + coche.offsetWidth >= lineaMeta.offsetLeft) {
    alert("¡Has llegado a la meta!");
    reiniciarJuego();
  }
}

function reiniciarJuego() {
  posicionX = 0;
  posicionY = 150;
  puntuacion = 0;
  coche.style.left = posicionX + "px";
  coche.style.top = posicionY + "px";
  document.getElementById("score").innerText = puntuacion;
}
*/

// const cochePrincipal = document.getElementById("car");
// const coche2 = document.getElementById("car2");
// const coche3 = document.getElementById("car3");
// const pistaWidth = document.getElementById("pista").offsetWidth;
// const pistaHeight = document.getElementById("pista").offsetHeight;
// const lineaMeta = document.getElementById("finish-line");
// let posicionX = 0;
// let posicionY = 150;
// let puntuacion = 0;
// let coche2LlegoAntes = false;
// let coche3LlegoAntes = false;

// document.addEventListener("keydown", function(event) {
//   event.preventDefault();

//   if (event.code === "ArrowRight") {
//     if (posicionX < pistaWidth - cochePrincipal.offsetWidth) {
//       posicionX += 10;
//       cochePrincipal.style.left = posicionX + "px";
//       actualizarPuntuacion();
//       verificarColision();
//       verificarMeta();
//     }
//   } else if (event.code === "ArrowUp") {
//     if (posicionY > 0) {
//       posicionY -= 10;
//       cochePrincipal.style.top = posicionY + "px";
//       actualizarPuntuacion();
//       verificarColision();
//       verificarMeta();
//     }
//   } else if (event.code === "ArrowDown") {
//     const cocheHeight = cochePrincipal.offsetHeight;
//     if (posicionY + cocheHeight < pistaHeight) {
//       posicionY += 10;
//       cochePrincipal.style.top = posicionY + "px";
//       actualizarPuntuacion();
//       verificarColision();
//       verificarMeta();
//     }
//   }
// });

// function actualizarPuntuacion() {
//   puntuacion++;
//   document.getElementById("score").innerText = puntuacion;
// }

// function verificarColision() {
//   const cochePrincipalRect = cochePrincipal.getBoundingClientRect();
//   const coche2Rect = coche2.getBoundingClientRect();
//   const coche3Rect = coche3.getBoundingClientRect();

//   if (hayColision(cochePrincipalRect, coche2Rect) || hayColision(cochePrincipalRect, coche3Rect)) {
//     alert("¡Has chocado, perdiste!");
//     reiniciarJuego();
//   }
// }

// function hayColision(rect1, rect2) {
//   return (
//     rect1.left < rect2.right &&
//     rect1.right > rect2.left &&
//     rect1.top < rect2.bottom &&
//     rect1.bottom > rect2.top
//   );
// }

// function verificarMeta() {
//   if (posicionX + cochePrincipal.offsetWidth >= lineaMeta.offsetLeft) {
//     if (coche2.offsetLeft + coche2.offsetWidth >= lineaMeta.offsetLeft) {
//       coche2LlegoAntes = true;
//     }
//     if (coche3.offsetLeft + coche3.offsetWidth >= lineaMeta.offsetLeft) {
//       coche3LlegoAntes = true;
//     }

//     if (coche2LlegoAntes || coche3LlegoAntes) {
//       alert("¡Perdiste! Otro coche llegó antes.");
//       reiniciarJuego();
//     } else {
//       alert("¡Ganaste!");
//       reiniciarJuego();
//     }
//   }
// }

// function reiniciarJuego() {
//   posicionX = 0;
//   posicionY = 150;
//   puntuacion = 0;
//   cochePrincipal.style.left = posicionX + "px";
//   cochePrincipal.style.top = posicionY + "px";
//   document.getElementById("score").innerText = puntuacion;
//   coche2LlegoAntes = false;
//   coche3LlegoAntes = false;
// }

// function moverCoche(coche, velocidad) {
//   let posicionX = 0;
//   let posicionY = coche.offsetTop;

//   setInterval(function() {
//     posicionX += velocidad;

//     if (posicionX >= pistaWidth - coche.offsetWidth) {
//       posicionX = 0;
//       coche.style.top = Math.floor(Math.random() * (pistaHeight - coche.offsetHeight)) + "px";
//     }

//     coche.style.left = posicionX + "px";
//   }, 50);
// }

// function moverCochesAutomaticamente() {
//   const coches = document.getElementsByClassName("car");

//   for (let i = 0; i < coches.length; i++) {
//     const coche = coches[i];
//     const velocidad = Math.random() * 5 + 1; // Velocidad aleatoria entre 1 y 5

//     if (coche !== cochePrincipal) {
//       moverCoche(coche, velocidad);
//     }
//   }
// }

// document.addEventListener("DOMContentLoaded", function() {
//   moverCochesAutomaticamente();
// });

const carroPrincipal = document.getElementById("car");
const carro2 = document.getElementById("car2");
const carro3 = document.getElementById("car3");
const pistaWidth = document.getElementById("pista").offsetWidth;
const pistaHeight = document.getElementById("pista").offsetHeight;
const lineaMeta = document.getElementById("finish-line");
let posicionX = 0;
let posicionY = 150;
let puntuacion = 0;
let carro2LlegoAntes = false;
let carro3LlegoAntes = false;

document.addEventListener("keydown", function(event) {
  event.preventDefault();

  if (event.code === "ArrowRight") {
    if (posicionX < pistaWidth - carroPrincipal.offsetWidth) {
      posicionX += 10;
      carroPrincipal.style.left = posicionX + "px";
      actualizarPuntuacion();
      verificarColision();
      verificarMeta();
    }
  } else if (event.code === "ArrowUp") {
    if (posicionY > 0) {
      posicionY -= 10;
      carroPrincipal.style.top = posicionY + "px";
      actualizarPuntuacion();
      verificarColision();
      verificarMeta();
    }
  } else if (event.code === "ArrowDown") {
    const carroHeight = carroPrincipal.offsetHeight;
    if (posicionY + carroHeight < pistaHeight) {
      posicionY += 10;
      carroPrincipal.style.top = posicionY + "px";
      actualizarPuntuacion();
      verificarColision();
      verificarMeta();
    }
  }
});

function actualizarPuntuacion() {
  puntuacion++;
  document.getElementById("score").innerText = puntuacion;
}

function verificarColision() {
  const carroPrincipalRect = carroPrincipal.getBoundingClientRect();
  const carro2Rect = carro2.getBoundingClientRect();
  const carro3Rect = carro3.getBoundingClientRect();

  if (hayColision(carroPrincipalRect, carro2Rect) || hayColision(carroPrincipalRect, carro3Rect)) {
    alert("¡Has chocado, perdiste!");
    reiniciarJuego();
  }
}

function hayColision(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

function verificarMeta() {
  if (posicionX + carroPrincipal.offsetWidth >= lineaMeta.offsetLeft) {
    if (carro2.offsetLeft + carro2.offsetWidth >= lineaMeta.offsetLeft) {
      carro2LlegoAntes == true;
    }
    if (carro3.offsetLeft + carro3.offsetWidth >= lineaMeta.offsetLeft) {
      carro3LlegoAntes == true;
    }

    if (carro2LlegoAntes || carro3LlegoAntes) {
      alert("¡Perdiste! Otro carro llegó antes.");
      reiniciarJuego();
    } else {
      alert("¡Ganaste!");
      reiniciarJuego();
    }
  }
}

function reiniciarJuego() {
  posicionX = 0;
  posicionY = 150;
  puntuacion = 0;
  carroPrincipal.style.left = posicionX + "px";
  carroPrincipal.style.top = posicionY + "px";
  document.getElementById("score").innerText = puntuacion;
  carro2LlegoAntes = false;
  carro3LlegoAntes = false;
}

function moverCarro(carro, velocidad) {
  let posicionX = 0;
  let posicionY = carro.offsetTop;

  setInterval(function() {
    posicionX += velocidad;

    if (posicionX >= pistaWidth - carro.offsetWidth) {
      posicionX = 0;
      carro.style.top = Math.floor(Math.random() * (pistaHeight - carro.offsetHeight)) + "px";
    }

    carro.style.left = posicionX + "px";
  }, 50);
}

function moverCarrosAutomaticamente() {
    const carros = document.getElementsByClassName("car");
    const distanciaMinima = 100; // Distancia mínima entre carros
  
    for (let i = 0; i < carros.length; i++) {
      const carro = carros[i];
      const velocidad = Math.random() * 5 + 1; // Velocidad aleatoria entre 1 y 5
  
      if (carro !== carroPrincipal) {
        let posicionInicial = Math.floor(Math.random() * (pistaHeight - carro.offsetHeight)) + "px";
  
        // Verificar si la posición inicial está muy cerca del carro principal
        if (Math.abs(posicionInicial - carroPrincipal.style.top) < distanciaMinima) {
          if (posicionInicial < pistaHeight / 2) {
            posicionInicial -= distanciaMinima;
          } else {
            posicionInicial += distanciaMinima;
          }
        }
  
        carro.style.top = posicionInicial;
        moverCarro(carro, velocidad);
      }
    }
  }
  
document.addEventListener("DOMContentLoaded", function() {
  moverCarrosAutomaticamente();
});
