// Déclarer tout mes champs dans des variables
const inputMail = document.getElementById("emailInput");
const inputUsername = document.getElementById("usernameInput");
const inputPassword = document.getElementById("passwordInput");
const inputValidatePassword = document.getElementById("verifiedPasswordInput");
const inputBtnValidation = document.getElementById("submitBtn");

// Placer les écouteurs d'évènements sur mes champs
inputMail.addEventListener("keyup", validateForm);
inputUsername.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);
inputBtnValidation.addEventListener("click", validateForm);

// Fonction pour valider le formulaire
function validateForm() {
    const userNameOk = validateRequired(inputUsername);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmPassword(
        inputPassword,
        inputValidatePassword
    );

    if (userNameOk && mailOk && passwordOk && passwordConfirmOk) {
        inputBtnValidation.disabled = false;
    } else {
        inputBtnValidation.disabled = true;
    }
}

// Fonction pour valider la confirmation du mot de passe
function validateConfirmPassword(inputPwd, inputConfirmPwd) {
    if (inputPwd.value === inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    } else {
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");
        return false;
    }
}

// Fonction pour valider le mot de passe
function validatePassword(input) {
    // définir mon regex pour le mot de passe
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;

    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Fonction pour valider le mail
function validateMail(input) {
    // définir mon regex pour l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;

    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Fonction pour valider les champs requis
function validateRequired(input) {
    if (input.value != "") {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}