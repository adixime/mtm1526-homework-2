var newlist;

var createList = function (ev) {
	
	newlist = document.createElement('li'); // .createElement() makes a new empty HTML tag
	
	newlist.className = 'listed'; //.className allows us to manipulate the classes of a tag
	
	document.getElementById('list').appendChild(newlist);	 //.appendChild() will add an element to the HTML file
	
	newlist.innerHTML = document.getElementById('item').value;

};

document.getElementById('listitem').addEventListener('click', createList, false);


document.documentElement.addEventListener('click', function (ev) {
	if (ev.target.tagName == 'LI') {
		ev.target.className = 'listed';
	//	list = ev.target;
		
	}
}, false);