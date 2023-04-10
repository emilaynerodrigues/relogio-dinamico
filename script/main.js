const hoursContainer = document.querySelector(".hour");
const minutesContainer = document.querySelector(".minute");
const secondsContainer = document.querySelector(".second");
const contentContainer = document.querySelector(".content");
const spinnerContainer = document.querySelector(".spinner");

function atualizarRelogio() {
  // Obter a hora atual
  const currentTime = new Date();

  // Formatar a hora como uma string
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Exibe a hora formatada
  secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds; //se segundos for menor que 10 a função deve acrescentar o 0 na frente, senão continua normal
  minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
  hoursContainer.textContent = hours < 10 ? "0" + hours : hours;

  if (hours >= 5 && hours <= 15) {
    contentContainer.classList.add("day");
    spinnerContainer.classList.add("spinner0");
  } else if (hours >= 16 && hours <= 18) {
    contentContainer.classList.add("sunset");
    spinnerContainer.classList.add("spinner120");
  } else {
    contentContainer.classList.add("night");
    spinnerContainer.classList.add("spinner240");
  }
}

// Atualizar o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
