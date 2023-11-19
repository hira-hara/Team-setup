// // Get button and sign-up box elements
// const signupButton = document.getElementById('signupButton');
// const signupBox = document.getElementById('signupBox');

// // Show sign-up box on button click
// signupButton.addEventListener('click', () => {
//   signupBox.style.display = 'block';
// });

// // Hide sign-up box when clicking outside the box
// document.addEventListener('click', (e) => {
//   if (!signupBox.contains(e.target) && e.target !== signupButton) {
//     signupBox.style.display = 'none';
//   }
// });

// // Prevent closing the sign-up box when interacting with the form
// signupBox.addEventListener('click', (e) => {
//   e.stopPropagation();
// });

// // Handle form submission
// const signupForm = document.getElementById('signupForm');
// signupForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // Add code here to handle form submission (e.g., sending data to server)
//   console.log('Form submitted!');
//   // Optionally, hide the sign-up box after submission
//   signupBox.style.display = 'none';
// });
