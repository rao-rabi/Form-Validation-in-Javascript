// form input validation

function checkValidation() {

    //name

    let target = document.getElementById("inputtext")
    if (target.value.length === 0) {
        alert("Please Enter your name");
        target.focus();
        target.style.background = "yellow"
        return false;
    }
    target.style.background = "white";

    //Select option 

    let selectOpt = document.getElementById("select");
    if (selectOpt.selectedIndex === 0) {
        alert("Please select an option");
        selectOpt.focus();
        return false;
    }


    //zip code

    let zipCode = document.getElementById("zipcode");

    if (zipCode.value.length < 5) {
        alert("Enter Correct Zip Code")
        zipCode.focus();
        return false;
    }

    for (let i = 0; i <= 4; i++) {
        if (isNaN(zipCode.value[i])) {
            alert("Please Enter Only Numbers in Zip Code");
            zipCode.focus();
            return false;
        }
    }

    //email

    let email = document.getElementById("email").value;
    if (email.indexOf(" ") !== -1) {
        alert("Please write your email")
        email.focus();
        return false;
    }

    let isValid = true;

    if (email.indexOf("@") < 1 || email.indexOf("@") > 15) {     //to limit adress digits before "@"
        isValid = false;
    }

    if (email.indexOf(".") - email.indexOf("@") < 2 || email.indexOf(".") > email.length - 3) { //to limit after "@" and "." sign
        isValid = false;

    }

    if (isValid == false) {
        alert("Please Enter valid Email adress")
        email.focus();
        return false;
    }

    //radio button

    let radio = document.getElementsByName("rb");
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return true;
        }
    }
    alert("Please check one radio button")
    email.focus();
    return false;


}