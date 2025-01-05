const pseudoInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", checkCredentials);

// Fonction qui vérifie les identifiants
function checkCredentials() {
    // Ici, plus tard appel api pour vérifier les identifiants en BDD

    if (pseudoInput.value == "test" && passwordInput.value == "test123") {
        // il faudra récupérer le vrai token de l'api
        const token = "opijpoiujoijiojuoijoikhfukedtreiumorfjoij";
        setToken(token);

        setCookie(roleCookieName, "admin", 7);
        //placer ce token en cookie

        window.location.replace("/");
    } else {
        pseudoInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}
