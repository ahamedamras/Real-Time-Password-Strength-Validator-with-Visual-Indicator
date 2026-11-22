var pass = document.getElementById("password");
var strength = document.getElementById("strength");
var bar = document.getElementById("bar");
var toggle = document.getElementById("toggle");

var lengthReq = document.getElementById("length");
var upperReq = document.getElementById("upper");
var numberReq = document.getElementById("number");
var symbolReq = document.getElementById("symbol");

toggle.onclick = function(){
    if(pass.type === "password"){
        pass.type = "text";
        toggle.innerHTML = "Hide";
    } else {
        pass.type = "password";
        toggle.innerHTML = "Show";
    }
}

pass.addEventListener("input", function(){

    let value = pass.value;
    let score = 0;

    if(value.length >= 8){
        score++;
        lengthReq.style.color = "green";
        pass.style.cursor = "not-allowed";
    } else {
        lengthReq.style.color = "gray";
    }

    if(/[A-Z]/.test(value)){
        score++;
        upperReq.style.color = "green";
    } else {
        upperReq.style.color = "gray";
    }

    if(/[0-9]/.test(value)){
        score++;
        numberReq.style.color = "green";
    } else {
        numberReq.style.color = "gray";
    }

    if(/[^A-Za-z0-9]/.test(value)){
        score++;
        symbolReq.style.color = "green";
    } else {
        symbolReq.style.color = "gray";
    }

    if(score == 1){
        strength.innerHTML = "Weak";
        bar.style.width = "25%";
        bar.style.background = "red";
    }
    else if(score == 2){
        strength.innerHTML = "Medium";
        bar.style.width = "50%";
        bar.style.background = "orange";
    }
    else if(score == 3){
        strength.innerHTML = "Strong";
        bar.style.width = "75%";
        bar.style.background = "#4caf50";
    }
    else if(score == 4){
        strength.innerHTML = "Very Strong";
        bar.style.width = "100%";
        bar.style.background = "green";
    }
    else{
        strength.innerHTML = "";
        bar.style.width = "0%";
    }

});