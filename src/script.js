const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    const mensagemValue = mensagem.value;

    if (usernameValue === ''){
        setErrorFor(username, "O nome é obrigatório.");
    } else {
        setSucessFor(username);
    }

    if (emailValue === ''){
        setErrorFor(email, "O email é obrigatório.");
    } else {
        setSucessFor(email);
    }

    if (telefoneValue === ''){
        setErrorFor(telefone, "O telefone é obrigatório.");
    } else {
        setSucessFor(telefone);
    }

    if (mensagemValue === ''){
        setErrorFor(mensagem, "A mensagem é obrigatório.");
    } else {
        setSucessFor(mensagem);
    }

}

function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector("small");

   small.innerText = message;

   formControl.className = "form-control error";
}

function setSucessFor(input, message) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}