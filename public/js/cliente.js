(function(d, io){
	'use strict';

	var io = io();

	var boton =  document.getElementById('button'),
		tweet = document.getElementById('texto'),
		lista = document.getElementById('tweets');

	boton.addEventListener('click',publicar);

	function publicar(){
		if(tweet.value == ''){
			console.log('Contenido invalido!');
		}else{
			io.emit('newTweet', tweet.value);
		lista.insertAdjacentHTML('afterbegin','<div id="tweet"><div id="user"><div id="img"></div><div id="cab"><header>Pepe.</header><footer><h5>@Pepe.</h5></footer></div></div><div id="contenido">'+tweet.value+'</div><footer></footer></div>');
		}
		tweet.value = '';
	}

	io.on('actualizar', function(e){
		console.log(e);
		lista.insertAdjacentHTML('afterbegin','<div id="tweet"><div id="user"><div id="img"></div><div id="cab"><header>Pepe.</header><footer><h5>@Pepe.</h5></footer></div></div><div id="contenido">'+e+'</div><footer></footer></div>');
	});

})(document, io);