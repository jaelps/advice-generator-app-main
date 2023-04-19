var botao = window.document.querySelector('.icone')
var titulo = window.document.querySelector('#titulo')
var text = window.document.querySelector('#citacao')

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip
      let dataId = data.id
      let dataAdvice = data.advice

      titulo.innerHTML = `advice # ${dataId}`
      text.innerHTML = `"${dataAdvice}"`
    })
}

// When button is clicked, run the generateAdvice function
botao.addEventListener("click" || "touch", () => {
  generateAdvice();
});