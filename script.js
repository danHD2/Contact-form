const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const radios = document.getElementsByName("qtype");
const msg = document.getElementById("msg");
const check = document.getElementById("check");
const submit = document.getElementById("submit");
const success = document.getElementById("success");
const fNameerr = document.getElementById("fnameerr");
const lNameerr = document.getElementById("lnameerr")
const emailerr = document.getElementById("emailerr");
const radioErr = document.getElementById("qtypeerr");
let isSelected = false;
const msgErr = document.getElementById("msgerr");
const checkErr = document.getElementById("checkerr");

const show = () => {
    

    success.style.display = "block";    
    setTimeout(() => {
        success.style.opacity = 1;     
    }, 10); 

    setTimeout(function() {
        success.style.opacity = 0;      
    }, 3000);  

    setTimeout(function() {
        success.style.display = "none"; 
    }, 3500);  

    fName.value = "";
    lName.value = "";
    email.value = "";
    document.getElementById("qtype").checked=false
    document.getElementById("qtype2").checked=false
    msg.value = "";
    check.checked = false;
    

}

const checkFName = () => {
    
    if(fName.value.trim() === "") {        
        fNameerr.style.display = "block";
        fName.style.borderColor = "hsl(0, 66%, 54%)";
        return false;
    } else {
        fNameerr.style.display = "none";
        fName.style.borderColor = "hsl(169, 82%, 27%)";
        return true;
}
}

const checkLName = () => {
    if(lName.value.trim() === "") {
        lNameerr.style.display = "block";
        lName.style.borderColor = "hsl(0, 66%, 54%)";
        return false;
    } else {
        lNameerr.style.display = "none";
        lName.style.borderColor = "hsl(169, 82%, 27%)";      
        return true;
    }

}

const checkEmail = (emailValue) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = emailPattern.test(emailValue);
    return result;
}

const validateEmail = () => {
    const emailValue = email.value.trim();
    checkEmail(emailValue);
    if (checkEmail(emailValue)) {
        emailerr.style.display = "none";
        email.style.borderColor = "hsl(169, 82%, 27%)";
        return true;
    } else {
        emailerr.style.display = "block";
        email.style.borderColor = "hsl(0, 66%, 54%)";
        return false;
    }
}

const checkRadio = () => {
     
    for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        isSelected = true;
        break;
    }
}
}

    const validateRadio = () => {
        checkRadio();
        if (isSelected) {
            radioErr.style.display = "none";
            return true
        } else {
            radioErr.style.display = "block";
            return false
        }
    }

    const checkMsg = () => {
        if(msg.value.trim() === "") {
            msgErr.style.display = "block";
            msg.style.borderColor = "hsl(0, 66%, 54%)";
            return false;
        } else {
            msgErr.style.display = "none";
            msg.style.borderColor = "hsl(169, 82%, 27%)";      
            return true;
        }
    
    }

    const checkTheCheck = () => {
        const isChecked = check.checked;
        if (isChecked) {
            checkErr.style.display = "none";
            return true;
        } else {
            checkErr.style.display = "block";
            return false;
        }
    }

const formCheck = (event) => {
    

    event.preventDefault();
    const isFNameValid = checkFName();
    const isLNameValid = checkLName();
    const isEmailValid = validateEmail();
    const isRadioValid = validateRadio();
    const isMsgValid = checkMsg();
    const isCheckValid = checkTheCheck();
    
    if (isFNameValid && isLNameValid && isEmailValid && isRadioValid && isMsgValid && isCheckValid) {
        show();
    }

    }




submit.addEventListener("click", formCheck);

