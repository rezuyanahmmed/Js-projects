// 1. parent node
const mainContainer = document.getElementById('main-container');

// 2. Create child node
const placeSection = document.createElement('section')

// create h1
const h1 = document.createElement('h1');
h1.innerText = 'places I want to visit';
placeSection.appendChild(h1)

// create ul
const ul = document.createElement('ul');
// ul.innerText = 'players name';
// placeSection.appendChild(ul)

const li1 = document.createElement('li');
li1.innerText = 'Messi'

ul.appendChild(li1);
placeSection.appendChild(ul);


// 3. append placeSection to the mainContainer
mainContainer.appendChild(placeSection)

// same uporer tar motoi just ektu easier...
const bookSection = document.getElementById('section');
bookSection.innerHTML = `
<h1>My books</h1>
<ul>
    <li>Physics</li>
    <li>English</li>
</ul>

`
mainContainer.appendChild(bookSection)