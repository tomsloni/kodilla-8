var wiersze = prompt('Podaj liczbę wierszy: ')


function rysujChoinke(n) {
	for (i = 1; i-1 != n; i++) {
		for (j = i*2-1, star = ''; j > 0; j -= 1) {
			star += '*';
		}
		console.log(star);
	}
}

console.log(rysujChoinke(wiersze));