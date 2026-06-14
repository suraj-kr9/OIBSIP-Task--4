function register() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    showMsg("Fill all fields !", "red");
    return;
  }

  localStorage.setItem(user, pass);
  showMsg("Registered Successfully !", "lightgreen");
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let stored = localStorage.getItem(user);

  if (stored === pass) {
    showMsg("Login Successful 🚀", "lightgreen");
  } else {
    showMsg("Invalid Credentials ❌", "red");
  }
}

function showMsg(msg, color) {
  let el = document.getElementById("message");
  el.textContent = msg;
  el.style.color = color;
}