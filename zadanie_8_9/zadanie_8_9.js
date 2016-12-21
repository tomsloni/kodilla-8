var wiersze = prompt('Podaj liczbę wierszy: '),
	star = '';



function rysujChoinke(n) {
	var i, k, j;
	for (i = 1, star = ''; i-1 != n; i++) {

		for (k = 0; k <= n-i-1; k++) {
			star += ' ';
		}

		for (j = i*2-1; j > 0; j -= 1) {
			star += '*';
		}

		console.log(star);
		star = '';
	}

}

rysujChoinke(wiersze);