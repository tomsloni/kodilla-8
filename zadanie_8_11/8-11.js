var i = document.getElementsByTagName('li'),
	list = document.getElementById('lista'),
	addElem = document.getElementById('addElem');

addElem.addEventListener('click', function(e) {
	newElem = document.createElement('li');
	newElem.innerHTML = 'item ' + i.length;
	list.appendChild(newElem);
});