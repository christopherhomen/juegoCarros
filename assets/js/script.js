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
  const metaL = lineaMeta.getBoundingClientRect();

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
    if (
      (carro2.offsetLeft + carro2.offsetWidth >= lineaMeta.offsetLeft &&
        posicionX + carroPrincipal.offsetWidth <= lineaMeta.offsetLeft) ||
      (carro3.offsetLeft + carro3.offsetWidth >= lineaMeta.offsetLeft &&
        posicionX + carroPrincipal.offsetWidth <= lineaMeta.offsetLeft)
    ) {
      alert("¡Perdiste! Carro 2 o Carro 3 llegaron a la meta antes que el carro principal.");
      reiniciarJuego();
    } else if (posicionX + carroPrincipal.offsetWidth >= lineaMeta.offsetLeft) {
      alert("¡Ganaste!");
      reiniciarJuego();
    }
  }
  
  

function reiniciarJuego() {
  posicionX = 0;
  posicionY = 150;
  puntuacion = 0;
  carroPrincipal.style.left = posicionX + "px";
  carroPrincipal.style.top = posicionY + "px";
  document.getElementById("score").innerText = puntuacion;
//   carro2LlegoAntes = false;
//   carro3LlegoAntes = false;
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
      let posicionInicial = Math.floor(Math.random() * (pistaHeight - carro.offsetHeight));

      // Verificar si la posición inicial está muy cerca del carro principal
      if (Math.abs(posicionInicial - parseInt(carroPrincipal.style.top)) < distanciaMinima) {
        if (posicionInicial < pistaHeight / 2) {
          posicionInicial -= distanciaMinima;
        } else {
          posicionInicial += distanciaMinima;
        }
      }

      carro.style.top = posicionInicial + "px";
      moverCarro(carro, velocidad);
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  moverCarrosAutomaticamente();
});
