const btnSave = document.getElementById("save");

btnSave.addEventListener("click", () => {
  const imputElement = document.getElementById(`name`);
  console.log(imputElement.value);
  localStorage.setItem(`nome`, imputElement.value);
});

const btnRemove = document.getElementById(`remove`);

btnRemove.addEventListener(`click`, () => {
  localStorage.removeItem(`nome`);
});

const imputElement = document.getElementById(`name`);
imputElement.value = localStorage.getItem(`nome`);

let time = sessionStorage.getItem(`secondi`);
const tempo = document.getElementById(`Time`);
tempo.innerHTML = time;

setInterval(() => {
  time++;
  const tempo = document.getElementById(`Time`);
  tempo.innerHTML = time;
  sessionStorage.setItem(`secondi`, time);
}, 1000);
