var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var escritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];
var tickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];

socket.on('getUltimos4', function(data) {
    recorrer4(data);
});

socket.on('ultimos4', function(data) {
    recorrer4(data);

    let audio = new Audio("audio/new-ticket.mp3");

    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise
            .then(_ => {
                // Automatic playback started!
                // Show playing UI.
            })
            .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
                console.log('Error con la reproducción.');
            });
    }
});

function recorrer4(data) {
    $.each(data.ultimos4, function(index, ele) {
        tickets[index].text('Ticket ' + ele.numero);
        escritorios[index].text('Escritorio ' + ele.escritorio);
    });


}