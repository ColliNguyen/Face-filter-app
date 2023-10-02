
// Step 1: Add preload() function
function preload() {
    // Your preloading logic goes here (if needed)
}

// Step 2: Add setup() function
function setup() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    centerCanvas(canvas);
}

// Helper function to center the canvas
function centerCanvas(canvas) {
    let bodyRect = document.body.getBoundingClientRect();
    let canvasRect = canvas.getBoundingClientRect();
    canvas.style.left = `${(bodyRect.width - canvasRect.width) / 2}px`;
    canvas.style.top = `${(bodyRect.height - canvasRect.height) / 2}px`;
}

// Step 3: Add draw() function
function draw() {
    // Your drawing logic goes here (if needed)
}

// Step 4: Define a function called onClick of the button
function saveImage() {
    // Your logic to save the filtered image goes here
    alert('Image saved!');
}