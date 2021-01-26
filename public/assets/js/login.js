$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("#logMeIn");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  let userData;

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", (event) => {
    event.preventDefault();
    userData = {
      email: emailInput.val(),
      password: passwordInput.val(),
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password,
      })
        .then((userCred) => {
          window.location.replace("/members");
          console.log(userCred);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    // emailInput.val("");
    // passwordInput.val("");
  });
});
