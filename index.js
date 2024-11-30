//create the element
//add attributes and properties
//append elemets to DOM

const newListitem = document.createElement('li')

newListitem.textContent = 'coconut';
newListitem.id = 'coconut';
newListitem.style.fontWeight = 'bold';
newListitem.style.backgroundColor = 'teal';

//const orange = document.getElementById("banana")
//document.getElementById('fruits').insertBefore(newListitem, orange)

const listItems = document.querySelectorAll('#fruits li');
document.getElementById('fruits').insertBefore(newListitem, listItems[3])