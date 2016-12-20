var wiersze = prompt('Podaj liczbę wierszy: '),
	i,
	k,
	j;


function rysujChoinke(n) {
	for (i = 1, star = ''; i-1 != n; i++) {

		for (k = ((n*2-1) - (i*2-1))/2; k > 0; k -= 1) {
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