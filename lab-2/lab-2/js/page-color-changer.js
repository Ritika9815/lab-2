/* ****************************************************
   File: page-color-changer.js
   Description: This script changes the HTML background color
                based on three range sliders for Red, Green, and Blue
**************************************************** */

/* Declare and initialize constants for the slider inputs */
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

/* Get the HTML element to change its background color */
 const htmlElement = document.documentElement; 

/* Add event listeners for when the user moves any slider */
redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);

/* Function to update the background color based on slider values */
function updateBackgroundColor() {
    /* Get values from each slider */
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    /* Combine into an RGB color string */
    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

     /* Apply the new color to the page background */
    htmlElement.style.backgroundColor = rgbColor;

    /* Display the RGB color in the console for testing */
    console.log("Background Color:", rgbColor);
}
/* Set an initial color when the page loads */
updateBackgroundColor()
