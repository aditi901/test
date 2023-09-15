document.getElementById("mybtn").addEventListener("click", function () {
   // Retrieve form data
   const projectName = document.getElementById("projectName").value;
   const startDate = new Date(document.getElementById("startDate").value);
   const description = document.getElementById("projectDetails").value;
   const teamMembers = Array.from(document.querySelectorAll("#teamMembers option:checked")).map(option => option.value);

   const currentDate = new Date();
   const twoDaysLater = new Date(currentDate);
   twoDaysLater.setDate(currentDate.getDate() + 2);

   if (startDate < twoDaysLater) {
       const errorMessage = "Start date should be at least 2 days later than the current date.";
       document.getElementById("errorMessage").textContent = errorMessage;

       // Display the error message for 5 seconds (5000 milliseconds)
       setTimeout(function () {
           document.getElementById("errorMessage").textContent = "";
       }, 5000);

       return;
   }

   alert("Form submitted successfully!");
});

