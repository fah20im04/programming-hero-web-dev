const mainContainer = document.getElementById('main-container');
//create childnode
const placeSection = document.createElement('section');
//create h1
const h1 = document.createElement('h1');
h1.innerText='hello girls';
placeSection.appendChild(h1); 

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'bag';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'bag';
ul.appendChild(li2);


const li3 = document.createElement('li');
li3.innerText = 'bag';
ul.appendChild(li3);


const li4 = document.createElement('li');
li4.innerText = 'bag';
ul.appendChild(li4);
placeSection.appendChild(ul);


//append placeSection to the main container
mainContainer.appendChild(placeSection);
const bookSection = document.createElement('section');
bookSection.innerHTML = `
<h1>books i need to reead</h1>
<ul>
    <li>physics</li>
    <li>chemistry</li>
    <li>math</li>
</ul>`
mainContainer.appendChild(bookSection);
placeSection.classList.add('section-card');
bookSection.classList.add('section-card');


// const sections = document.querySelectorAll('section');
// // console.log(sections);
// for(const section of sections){
//     // console.log(section);
//     section.style.backgroundColor = 'lightblue';
//     section.style.border = '3px solid green';
//     section.style.marginBottom = '5px'
//     section.style.borderRadius = '20px'
//     section.style.padding = '10px'
// }