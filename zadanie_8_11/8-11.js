function checkOnclickEvent(param) {
	console.log(param);
}

var i = 1,
	newElem,
	list;

var inputElem = document.getElementById('addElem');

inputElem.addEventListener('click', function(e) {
	list = document.getElementById('Lista')
	newElem = document.createElement('li');
	newElem.innerHTML = 'item ' + i;
	list.appendChild(newElem);
	i++;
});