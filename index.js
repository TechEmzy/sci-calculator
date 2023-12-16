// Get the screen and buttons elements
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

// Add event listeners to all buttons to handle button clicks
for(item of btn) {
    item.addEventListener('click', (e) => {
        // Get the text content of the clicked button
        btntext = e.target.innerText;

        // Replace 'x' with '*' and '÷' with '/'
        if(btntext == 'x'){
            btntext = '*';
        }
        if(btntext == '÷'){
            btntext = '/';
        }

        // Update the screen value with the button text
        screen.value += btntext;
    });
}

// Function to calculate sine
function sin() {
    screen.value = Math.sin(screen.value);
}

// Function to calculate cosine
function cos() {
    screen.value = Math.cos(screen.value);
}

// Function to calculate tangent
function tan() {
    screen.value = Math.tan(screen.value);
}

// Function to calculate power (x^2)
function pow() {
    screen.value = Math.pow(screen.value, 2);
}

// Function to calculate square root
function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

// Function to calculate logarithm
function log() {
    screen.value = Math.log(screen.value);
}

// Function to set screen value to pi
function pi() {
    screen.value = 3.14159265359;
}

// Function to set screen value to Euler's number (e)
function e() {
    screen.value = 2.71828182846;
}

// Function to calculate percentage
function perc() {
    screen.value = eval(screen.value) / 100;
}

// Function to calculate factorial
function fact() {
    try {
        // Get the value from the screen
        var num = parseInt(screen.value);

        // Check if the entered value is a non-negative integer
        if (Number.isInteger(num) && num >= 0) {
            var result = 1;
            for (var i = 2; i <= num; i++) {
                result *= i;
            }

            // Update the screen with the factorial result
            screen.value = result;
        } else {
            // Handle invalid input
            screen.value = 'Invalid Input';
        }
    } catch (error) {
        // Handle errors
        screen.value = 'Error';
    }
}

// Function to delete the last character from the screen
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
