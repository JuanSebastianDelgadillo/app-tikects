//comando establecer com

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Servidor conectado');
    socket.emit('actualTicket', null, function(actualTicket) {
        label.text(actualTicket.actual);
    });
});

socket.on('desconnect', function() {
    console.log('Servidor sin conexiòn');
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});

function buscar_siguiente() {

}