
function atualizarTempo() {
    var display = document.querySelector('.display')

    var agora = new Date();


    var horario = agora.getHours() + ':' 
    +String(agora.getMinutes()).padStart(2,'0') + ':' + String(agora.getSeconds()).padStart(2,'0');

    console.log(horario)

    display.textContent = horario;

}



setInterval(atualizarTempo, 1000);
