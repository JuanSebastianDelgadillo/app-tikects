const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.emit('EscucharMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido a la aplicacion'
    })

    //escuchar informacion

    client.on('EscucharMensaje', (mensaje, callback) => {
        console.log(mensaje);

        client.broadcast.emit('EscucharMensaje', mensaje);


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MALLLLLL'
        //     });
        // }


        // callback();

    })


});