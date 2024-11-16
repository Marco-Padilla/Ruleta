const wheel = document.getElementById("wheel");
const spinSound = document.getElementById("spin");
const victorySound = document.getElementById("victory");

const logo = document.getElementById("logo1");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");

// Define premios y espacios en blanco intercalados
const prizes = [
  "₡30,000",
  "₡25,000",
  "₡40,000",
  "₡25,000",
  "₡50,000",
  "₡25,000",
  "₡60,000",
  "₡25,000",
  "₡70,000",
  "₡25,000",
  "₡80,000",
  "₡25,000",
  "₡90,000",
  "₡25,000",
  "₡100,000",
  "₡25,000",
];

lottie.loadAnimation({
  container: document.getElementById("lottie"), // Contenedor de la animación
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "animacion.json",
});

function spinWheel() {
  spinSound.play();
  // Genera un giro aleatorio entre 5 y 10 vueltas completas (1800° a 3600°)
  const extraTurns = Math.floor(Math.random() * 3 + 3) * 360;

  // Elige aleatoriamente uno de los 16 espacios
  const randomSegment = Math.floor(Math.random() * 16);
  const prizeAngle = randomSegment * 22.5;

  // Ángulo total para el giro
  const totalAngle = extraTurns + prizeAngle;

  // Aplica rotación a la ruleta
  wheel.style.transform = `rotate(${totalAngle}deg)`;

  // Espera a que la animación termine para mostrar el resultado
  setTimeout(() => {
    const prize = prizes[randomSegment];

    if (prize === "₡25,000") {
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
      img4.style.display = "none";
      img5.style.display = "none";
      img6.style.display = "none";
      img7.style.display = "none";
      img8.style.display = "none";
      img9.style.display = "block";
      logo.style.display = "none";

      victorySound.play();
    }
    if (prize === "₡30,000") {
      img1.style.display = "block";
      img2.style.display = "none";
      img3.style.display = "none";
      img4.style.display = "none";
      img5.style.display = "none";
      img6.style.display = "none";
      img7.style.display = "none";
      img8.style.display = "none";
      img9.style.display = "none";
      logo.style.display = "none";

      victorySound.play();
    }
    if (prize === "₡40,000") {
      img1.style.display = "none";
      img2.style.display = "block";
      img3.style.display = "none";
      img4.style.display = "none";
      img5.style.display = "none";
      img6.style.display = "none";
      img7.style.display = "none";
      img8.style.display = "none";
      img9.style.display = "none";
      logo.style.display = "none";

      victorySound.play();
    }
    if (prize === "₡50,000") {
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "block";
      img4.style.display = "none";
      img5.style.display = "none";
      img6.style.display = "none";
      img7.style.display = "none";
      img8.style.display = "none";
      img9.style.display = "none";
      logo.style.display = "none";

      victorySound.play();
    }
    if (prize === "₡60,000") {
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
      img4.style.display = "block";
      img5.style.display = "none";
      img6.style.display = "none";
      img7.style.display = "none";
      img8.style.display = "none";
      img9.style.display = "none";
      logo.style.display = "none";

      victorySound.play();
    }
    if (prize === "₡70,000") {
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
      img4.style.display = "none";
      img5.style.display = "block";
      img6.style.display = "none";
      img7.style.display = "none";
      img8.style.display = "none";
      img9.style.display = "none";
      logo.style.display = "none";

      victorySound.play();
    }
    if (prize === "₡80,000") {
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
      img4.style.display = "none";
      img5.style.display = "none";
      img6.style.display = "block";
      img7.style.display = "none";
      img8.style.display = "none";
      img9.style.display = "none";
      logo.style.display = "none";

      victorySound.play();
    }
    if (prize === "₡90,000") {
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
      img4.style.display = "none";
      img5.style.display = "none";
      img6.style.display = "none";
      img7.style.display = "block";
      img8.style.display = "none";
      img9.style.display = "none";
      logo.style.display = "none";

      victorySound.play();
    }
    if (prize === "₡100,000") {
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
      img4.style.display = "none";
      img5.style.display = "none";
      img6.style.display = "none";
      img7.style.display = "none";
      img8.style.display = "block";
      img9.style.display = "none";
      logo.style.display = "none";

      victorySound.play();
    }
  }, 6000); // 4 segundos coincide con el tiempo de animación
}
