const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelectec = document.querySelector("#message")
const menssageTextarea = document.querySelector("#message")

form.addEventListener("submit",(event) => {
    event.preventDefault();
    if(nameInput.value ==="") {
        alert("Campo De Nome Está vazio")
        return;
    }

    if(emailInput.value ==="" || !emailValid(emailInput.value,)){
        alert("Campo De Email Está Vazio");
        return;
    }
    if(!validatePassword.value(passwordInput.value, 8)){
        alert("A senha precisa ser no minimo 8 digitos");
        return;
    }

    if(jobSelectec.value ===""){
        alert("Selecione A Sua Situação");
        return;
    } 

    if(menssageTextarea.value ===""){
        alert("Não Deixe O campo Vazio");
        return;
    } 

    form.submit();
});

function emailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if(emailRegex.test(email)){
        return true;
    }else
        return false;
    }

    function validatePassword(password, minDigits) {
        if(password.length >=minDigits)
        return true

        return false
    }