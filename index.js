function createAccount(){
    document.getElementById("signupPopup").style.display="block";
    document.getElementById("close").style.display="block";
    document.querySelector("body").style.overflow="hidden";
    document.getElementById("dark").style.display="block";
    
}

function signIn(){
    document.getElementById("signupPopup").style.display="none";
    document.getElementById("loginPopup").style.display="block";
}

function signUP(){
    document.getElementById("loginPopup").style.display="none";
    document.getElementById("signupPopup").style.display="block";
}

function closePage(){
    document.getElementById("signupPopup").style.display="none";
    document.getElementById("loginPopup").style.display="none";
    document.getElementById("close").style.display="none";
    document.getElementById("dark").style.display="none";
    document.querySelector("body").style.overflow="auto";
}