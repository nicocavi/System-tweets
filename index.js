'use strict';

const express = require('express'),
	app = express(),
	http = require('http').createServer(app),
	io = require('socket.io')(http),
	port = process.env.PORT || 3000,
	publicDir = express.static(`${__dirname}/public`);

app
	.use(publicDir)
	.get('/', (req, res) => res.sendFile(`${publicDir}/index.html`));

http.listen(port, ()=> console.log('Iniciando Servidor en puerto: %d',port));

io.on('connection',(socket)=>{
	console.log('nuevo usuario conectado!');

	socket.on('newTweet',function(e){
	socket.broadcast.emit('actualizar',e);
});
})

