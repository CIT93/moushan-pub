/*
AI Use Disclosure:
Prompt used: "write structure  for the problem with example code" 
How AI helped: The AI provided a basic, beginner-friendly version of index.html, and app.js. 
It explained the error 'form is null' and showed how to fix it by moving the script or using DOMContentLoaded.
I used the AI’s response to build and debug the final working version of my project.
*/
// 1. Get the form element from HTML.
// 2. Listen for a "submit" event on the form.
// 3. Stop page reload with event.preventDefault().
// 4. Read the input value from the text field.
// 5. Create greeting: "Hello, [Name]!".
// 6. Show greeting inside the output element.
// 7. Reset the input.

const form = document.getElementById("greetingForm");
const nameInput = document.getElementById("nameInput");
const outputMessage = document.getElementById("outputMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop reload

  const name = nameInput.value.trim(); // read input
  if (name !== "") {
    const greeting = "Hello, " + name + "!";
    outputMessage.textContent = greeting; // show greeting
  } else {
    outputMessage.textContent = "Please enter your name.";
  }

  form.reset(); // clear input
});
