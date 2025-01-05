import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route(
        "/signup",
        "Formulaire d'inscription",
        "/pages/signup.html",
        "/js/auth/signup.js"
    ),
    new Route(
        "/formulaireUtilisateur",
        "Formulaire d'utilisateur",
        "/pages/formulaireUtilisateur.html"
    ),
    new Route(
        "/signin",
        "Formulaire de connexion",
        "/pages/signin.html",
        "js/auth/signin.js"
    ),
    new Route("/contact", "Formulaire de contact", "/pages/contact.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Ecoride";
