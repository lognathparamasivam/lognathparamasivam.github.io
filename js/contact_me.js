function sendMessage() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var response;
  if (name.length == 0 || email.length == 0 || message.length == 0) {
    document.getElementById("success").innerHTML = "<strong>Please enter your all details !</strong>";
  }
  else {
    document.getElementById("success").innerHTML = "<strong>Your Message has been sent !</strong>";
    document.getElementById("contactform").reset();
  }
}

