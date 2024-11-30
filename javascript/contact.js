document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('myForm');
    
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting the usual way
      
      const formData = new FormData(form); // Get the form data
  
      fetch(form.action, {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          // If the form submission is successful, redirect to the previous page
          window.history.back();  // Go back to the previous page
        } else {
          // Handle any errors with form submission
          alert("Error submitting the form");
        }
      })
      .catch(error => {
        alert("There was an error with the submission.");
      });
    });
  });
  