var a = prompt("Podaj liczbę a: ", 0),
	b = prompt("Podaj liczbę b: ", 0),
	value = (a*a) + (2*a*b) - (b*b);

if (isNaN(value)) {
	console.log('Wynik nieokreślony.');
	document.write('Wynik nieokreślony.');
} else {
	if (value > 0) {
		console.log('Wynik dodatni. ');
		document.write('Wynik dodatni. ');
	} else if(value == 0) {
		console.log('Wynik zerowy. ');
		document.write('Wynik zerowy. ');
	} else {
		console.log('Wynik ujemny. ');
		document.write('Wynik ujemny. ');
	}
	console.log('Otrzymana liczba to: ' + value);
	document.write('Otrzymana liczba to: ' + value);
}



