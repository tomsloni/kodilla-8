var a = prompt("Podaj liczbę a: ", 0),
	b = prompt("Podaj liczbę b: ", 0),
	value = (a*a) + (2*a*b) - (b*b);

if (value > 0) {
	console.log('wynik dodatni');
	document.write('wynik dodatni');
} else if(value == 0) {
	console.log('wynik zerowy');
	document.write('wynik zerowy');
} else {
	console.log('wynik dodatni');
	document.write('wynik ujemny');
}
