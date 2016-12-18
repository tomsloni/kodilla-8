var length = prompt('Podaj długość boku: '), 
	height = prompt('Podaj wysokość: ');

function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		return (a*h/2);
	} else {
		return 'Nieprawidłowe dane';
	}
}

document.write('Pole Twojego trójkąta: ' + getTriangleArea(length, height) + '<br>');

var triangle1Area = getTriangleArea(1, 5);
var triangle2Area = getTriangleArea(7, 3);
var triangle3Area = getTriangleArea(1434, 5232);

document.write(' Pole 1: ' + triangle1Area + '<br>');
document.write(' Pole 2: ' + triangle2Area + '<br>');
document.write(' Pole 3: ' + triangle3Area);