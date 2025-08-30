document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("welcomeShown")) {
    alert("Welcome to my Portfolio!");
    localStorage.setItem("welcomeShown", "true");
  }


  const btn = document.getElementById("togglebtn");
  if (btn) {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      btn.textContent = "☀️";
    }
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      } else {
        btn.textContent = "🌙";
        localStorage.setItem("theme", "light");
      }
    });
  }


  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
      } else {
        alert("Thank you for contacting me.");
        this.reset();
      }
    });
  }

  
  const passInput = document.getElementById("password");
  const eyeToggle = document.getElementById("eye-toggle");
  if (passInput && eyeToggle) {
    eyeToggle.addEventListener("click", () => {
      const icon = eyeToggle.querySelector("i");
      const isHidden = passInput.type === "password";
      passInput.type = isHidden ? "text" : "password";
      if (icon) {
        icon.classList.toggle("fa-eye-slash", !isHidden);
        icon.classList.toggle("fa-eye", isHidden);
      }
    });
  }
});
