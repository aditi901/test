document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email-p");
  const roleInput = document.getElementById("role-p");
  const passwordInput = document.getElementById("password-field");
  const confirmPasswordInput = document.getElementById("password-field");
  const checkbox = document.getElementById("chk-p");

  const registerButton = document.getElementById("r-btn");

  registerButton.addEventListener("click", function () {
    let valid = true;
    const emailValue = emailInput.value.trim();
    const roleValue = roleInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    if (!emailValue || !roleValue || !passwordValue || !confirmPasswordValue) {
      valid = false;
      showAlert("All fields are mandatory");
    }

    if (!isValidEmail(emailValue)) {
      valid = false;
      showAlert("Please enter a valid email address");
    }

    if (!isStrongPassword(passwordValue)) {
      valid = false;
      showAlert(
        "Password must be at least 8 characters long and contain letters, numbers, and symbols"
      );
    }

    if (passwordValue !== confirmPasswordValue) {
      valid = false;
      showAlert("Password and Confirm Password do not match");
    }

    if (!checkbox.checked) {
      valid = false;
      showAlert("You must agree to the terms and conditions");
    }

    if (!valid) {
      showAlert("Please correct the form errors before submitting.");
    } else {
      console.log(emailInput.value, roleInput.value, passwordInput.value);
    }
  });

  function showAlert(message) {
    alert(message);
  }

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  function isStrongPassword(password) {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  }
});
