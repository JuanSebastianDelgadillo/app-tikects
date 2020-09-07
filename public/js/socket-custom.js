var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//ON ESCUCHA INFORMACION
socket.on('disconnect', function() {
    console.log('Conexion perdida');
});
//EMIT EMITE INFORMACION
socket.emit('EscucharMensaje', {
    usuario: 'fernando',
    mensaje: 'conectado'
}, function(resp) {
    console.log(resp);
});

//ON ESCUCHA AL SERVER
socket.on('EscucharMensaje', function(mensaje) {

    console.log('server', mensaje);

});