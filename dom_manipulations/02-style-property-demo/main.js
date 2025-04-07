
const makeColor = (color) => {
    console.log(`Change background to ${color}`);
    document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('#section1').style.backgroundColor = 'red';
document.querySelector('#section2').style.backgroundColor = 'blue';
document.querySelector('#section3').style.backgroundColor = 'pink';
document.querySelector('#section4').style.backgroundColor = 'orange';

