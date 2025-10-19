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

