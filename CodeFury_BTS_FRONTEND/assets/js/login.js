document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.querySelector(".email-inp").value;
    var role = document.querySelector(".role-inp").value;
    var password = document.querySelector(".pwd-inp").value;

    if (email === "user@example.com" && password === "123") {
      if (role === "developer") {
        window.location.href = "../developer.html";
      } else if (role === "tester") {
        window.location.href = "tester.html";
      } else if (role === "projectmanagement") {
        window.location.href = "projectmanagement.html";
      } else {
        alert("Invalid role");
      }
    } else {
      alert("Invalid email or password");
    }
  });
