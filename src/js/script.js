// Variáveis
const mode = document.querySelector(".toggle")

// Funções

function reload() {
    location.reload()
}

function toggleMode() {
    mode.innerHTML == "toggle_off" ? mode.innerHTML = "toggle_on" : mode.innerHTML = "toggle_off"
}

// Eventos

mode.addEventListener("click", toggleMode)

// Chamadas de Função

toggleMode()





