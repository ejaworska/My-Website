var myIndex = 0;
carousel();


function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

function validateName() {
  var name = document.getElementById("contact-name").value;
  if(name.length == 0) {
    producePrompt("contact-name", "error-name", "Name is required");
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    producePrompt("contact-name", "error-name", "First and last name is required");
    return false;
  }
  document.getElementById("error-name").style.visibility = "hidden";
  return true;
}

function validateEmail () {
  var email = document.getElementById('contact-email').value;
  if(email.length == 0) {
    producePrompt("contact-email", "error-email", "Email is required");
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    producePrompt("contact-email", "error-email", "Invalid email");
    return false;
  }
  document.getElementById("error-email").style.visibility = "hidden";
  return true;
}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  if (message.length == 0) {
    producePrompt("contact-message", "error-message", "Message is required");
    return false;
  }
  document.getElementById("error-message").style.visibility = "hidden";
  return true;
}

function validateForm() {
    document.getElementById("confirmation").style.visibility = "hidden";
    if (!validateName() || !validateEmail() || !validateMessage()) {
        return false;
    }
    else {
        document.getElementById("confirmation").style.visibility = "visible";
        clearMessage();
        return false;
    }
}

function producePrompt(inputLocation, errorLocation, message) {
    document.getElementById(inputLocation).value = "";
    document.getElementById(inputLocation).placeholder = message;
    document.getElementById(errorLocation).style.visibility = "visible";
}

function clearMessage() {
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-message").value = "";
}