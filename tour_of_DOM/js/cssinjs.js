//const sections=document.getElementsByTagName('section');
const sections = document.querySelectorAll('section');
//console.log(sections);
// for(const section of sections){
//     console.log(section);
//     section.style.backgroundColor = 'lightblue';
//     section.style.border = '3px solid green';
//     section.style.marginBottom = '5px'
//     section.style.borderRadius = '20px'
//     section.style.padding = '10px'
// }
for(const section of sections){
    section.classList.add('section-card');
}
const newChild = document.createElement('li');
newChild.innerText = 'new man in town';
const playerList = document.getElementById('player-list');
playerList.appendChild(newChild);