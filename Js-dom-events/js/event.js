//Option: 1 directly set on the element

//option 2: add Onclick function 
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

//option: 3
const makeYellowButton = document.getElementById('make-yellow');
makeYellowButton.onclick = makeYello;

function makeYello() {
    document.body.style.backgroundColor = 'yellow';
}

//Option: 3 another
const purpleButton = document.getElementById('make-purple')
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';

}

const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//option 4
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})