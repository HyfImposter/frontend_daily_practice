let canvasWidth = document.documentElement.clientWidth - 10;
let canvasHeight = document.documentElement.clientHeight - 10;

// in p5.js, the function runs on page load:
function setup() {
    rectMode(CENTER);
    createCanvas(canvasWidth, canvasHeight);
}

// in p5.js, special event handler that listens for click events:
function mouseClicked() {
    // in p5.js, mouseX and mouseY are
    // built-in global variabls that track the
    // current position of your mouse.
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    fill(r, g, b);
    let size = Math.random() * (100 - 10) + 10;
    let shape = random_shape();
    if (shape === rect) {
        shape(mouseX, mouseY, size, size);
    } else {
        shape(mouseX, mouseY, size);
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        fill(r, g, b);
        shape(mouseX, mouseY, size / 2);
    }

}

// function random_shape() {
//     let shape = random([circle(), rect()]);
//     return shape;
// }

function random_shape() {
    // Randomly choose between circle and rect functions
    return Math.random() < 0.5 ? circle : rect;
}


// in p5.js, special event handler that listens for drag events:
function mouseDragged() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    fill(r, g, b);
    let size = Math.random() * (100 - 10) + 10;
    let shape = random_shape();
    if (shape === rect) {
        shape(mouseX, mouseY, size, size);
    } else {
        shape(mouseX, mouseY, size);
    }
}

/**
 * TODO:
 * Challenges:
 * 1. As you click / drag, can the circles have different colors and sizes?
 *      * Try using the Math.random() function
 * 2. Can you make the click / drag sometimes make circles and sometimes make rectangles
 *      * Sample rectangle function invocation: rect(mouseX, mouseY, 100, 100);
 * 3. Can you make each click create a bulleye of different colors?
 *      * Hint: make sure you draw the bigger circles before you draw the smaller circles.
 */
