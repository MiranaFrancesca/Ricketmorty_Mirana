import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    // route page d'accueil (URL "/")
    route("/", "routes/home.tsx"),

    // route page personnage (URL "/character")
    route("/character", "routes/character.tsx"),

    // route erreur 404 (toutes les autres URLs)
    route("*", "routes/error.tsx"),
] satisfies RouteConfig;
