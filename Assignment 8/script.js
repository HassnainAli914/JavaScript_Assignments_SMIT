// Toggle Section Display
function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = (section.style.display === 'block') ? 'none' : 'block';
}

// Show Image on Click
const imgBox = document.getElementById('imgBox');
let isImage = true;
imgBox.addEventListener('click', function () {
    if (isImage) {
        imgBox.style.backgroundImage = 'url("images/profile.jpg")';
        isImage = false;
    } else {
        imgBox.style.backgroundImage = 'url("/")';
        isImage = true;
    }
});

// form validation
function checkValid(event) {
    event.preventDefault()
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailCheck = email.includes("@") && email.includes(".");

    if (name === "" && email === "" && message === "") {
        alert("Please fill all the fields");
        document.getElementById("submit").type = "button";
    } else if (!emailCheck) {
        alert("Please enter a valid email with @ and .");
        document.getElementById("submit").type = "button";
    } else if (name === ""){
        alert("Please fill Name field!");
    } else if (email === ""){
        alert("Please fill Email field!");
    } else if (message === ""){
        alert("Please fill Message field!");
    }
    else {
        alert("Thank you " + name + ", we have received your email as " + email);
        document.getElementById("submit").type = "submit";
        return true;
    }
}