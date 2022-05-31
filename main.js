const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red' , 'pink' , 'yellow' , 'blue' , 'green' , 'purple'];

body.style.backgroundColor = 'violet';
button.addEventListener('click' , changeBackground);

function changeBackground() {
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}


