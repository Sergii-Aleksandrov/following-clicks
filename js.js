let div = document.querySelector('#div1');
div1.addEventListener('click', function(event) {
	let divRed = document.querySelector('#div2');
	divRed.style.left = event.pageX - divRed.clientWidth / 2 + 'px';
	divRed.style.top = event.pageY - divRed.clientHeight / 2 + 'px';
});