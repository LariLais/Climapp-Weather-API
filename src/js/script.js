// Variáveis
const mode = document.querySelector(".toggle")
var cont = 1
var radio = document.querySelector('.manual-btn')
document.getElementById('radio1').checked = true
// Funções
setInterval(() => {
    proximaImg()
},3000)

function proximaImg(){
    cont++
    if(cont > 3)
    cont = 1
    document.getElementById('radio'+cont).checked = true
}

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







