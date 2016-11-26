var womenNames = [],
	menNames = [],
	howMany = 0,
	yourName = "",
	gender = 3,
	saveMe = 0,
	tempName = "",
	allNames = [],
	newName = "";




function getWomanName(i) {
	tempName = prompt('Podaj imię dziewczyny numer ' + i + ': ');
	for (nameCheck = 0; nameCheck < 1;) {
		if (womenNames.indexOf(tempName) >= 0) {
			console.log('To już było! Podaj inne!');
			tempName = prompt('Podaj imię dziewczyny numer ' + i + ': ');
		}	
		else {
			nameCheck = 1;
			return tempName;
		}
	}
}

function getMenName(i) {
	tempName = prompt('Podaj imię faceta numer ' + i + ': ');
	for (nameCheck = 0; nameCheck < 1;) {
		if (menNames.indexOf(tempName) >= 0) {
			console.log('To już było! Podaj inne!');
			tempName = prompt('Podaj imię faceta numer ' + i + ': ');
		}
		else {
			nameCheck = 1;
			return tempName;
		}
	}
}



console.log('No to teraz...');
howMany = prompt('Podaj liczbę od 1 do 10: ');

if ((howMany <= 10) && (howMany >= 1)) {
	console.log('A więc ' + howMany +'!!');
}
else if (howMany > 10) {
	console.log('Wow! Ograniczmy się może do tych 10!');
	howMany = 10;
}
else if (howMany = 0) {
	console.log('Cóż za skromność! Przecież wiem, że było 5!');
	howMany = 5;
}
else {
	howMany = 1;
	console.log('Coś chyba poszło nie tak... Niech będzie, że ' + howMany);
}

if (howMany > 3) {
	console.log('Aż ' + howMany + '... Podziwiam!');
}
else {
	console.log('Będzie lepiej!');
}

yourName = prompt('Mam jakąś sklerozę... Jak masz na imię?');

gender = parseInt(prompt('Sorry, że pytam, ale jesteś mężczyzną (0) czy kobietą? (1)'));

switch (gender) {
	case 0:
		console.log('No dobra, koniec pitolenia, to teraz powiedz jak te dziewczyny miały na imię... było ich ' + howMany + '!');
		for (i = 1; howMany > 0; i++, howMany -= 1) {
			womenNames.push(getWomanName(i));
		}
		break;
	case 1:
		console.log('No dobra, koniec pitolenia, to teraz powiedz jak ci faceci mieli na imię... było ich ' + howMany + '!');
		for (i = 1; howMany > 0; i++, howMany -= 1) {
			menNames.push(getMenName(i));
		}
		break;
	default:
		console.log('No to ja już nie wiem co ja mam o Tobie myśleć... ani jedno ani drugie...');
		console.log('Ładna dzisiaj pogoda.');
		saveMe = 1;
		break;
}

switch (saveMe) {
	case 1:
		console.log('Miło było Cię poznać, ' + yourName + '!');
		break;

	default:
		switch (gender) {
			case 0:
				menNames.push(yourName);
				console.log('No cóż,' + yourName +', w miesiąc ' + womenNames + '... Pozazdrościć.');
				break;
			default:
				womenNames.push(yourName);
				console.log('No cóż,' + yourName +', w miesiąc ' + menNames + '... Pozazdrościć.');
				break;
		}

		allNames = menNames.concat(womenNames);
		console.log('W naszej rozmowie pojawiły się takie oto imiona: ' + allNames);
		console.log('Podasz może jeszcze jakieś?');
		newName = prompt('Jakiego imienia jeszcze nie było?');
		
		if (allNames.indexOf(newName) == -1) {
			console.log('Rzeczywiście coś nowego!');
			allNames.push(newName);
			console.log('Pogadaliśmy!')
			console.log('FINITO!')
		} else {
			console.log('Eeee... to już było...');
			console.log('Pogadaliśmy!')
			console.log('FINITO!')
		}

		break;
}