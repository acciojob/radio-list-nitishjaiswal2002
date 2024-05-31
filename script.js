//your JS code here. If required.
let labels = document.querySelectorAll('.input'); // Get all elements with class 'input'
labels.forEach((label, index) => {
  if (index % 2 === 1) { // Check if the element is even (index starts from 0)
    label.style.color = 'red'; // Change the color of the text in the 'input' element
  }
});