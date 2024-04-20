function findUserByUsername(username, users) {
  return users.find((user) => user.username === username);
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function signup() {
  var username = document.getElementById("username").value;
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  var users = JSON.parse(localStorage.getItem("users")) || [];
  if (findUserByUsername(username, users)) {
    alert("User already exists");
    return;
  }
  var newUser = {
    id: users.length + 1,
    username: username,
    name: name,
    password: password,
  };
  users.push(newUser);
  saveUsers(users);
  alert("Signup successful");
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var users = JSON.parse(localStorage.getItem("users")) || [];
  var user = findUserByUsername(username, users);
  if (!user) {
    alert("Username not found");
    return;
  }
  if (user.password !== password) {
    alert("Wrong password");
    return;
  }
  alert("Login successful");
  window.location.href = "https://arnab-calculator.web.app/";
}

function changePassword() {
  var username = document.getElementById("username").value;
  var newPassword = document.getElementById("newPassword").value;
  var confirmNewPassword = document.getElementById("confirmNewPassword").value;
  if (newPassword !== confirmNewPassword) {
    alert("New passwords do not match");
    return;
  }
  var users = JSON.parse(localStorage.getItem("users")) || [];
  var user = findUserByUsername(username, users);
  if (!user) {
    alert("User not found");
    return;
  }
  user.password = newPassword;
  saveUsers(users);
  alert("Password changed successfully");
}

function backToLogin() {
  window.location.href = "login.html";
}
