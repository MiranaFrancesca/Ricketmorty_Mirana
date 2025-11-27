import type { Route } from "./+types/home";
import Home from "~/pages/Home/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TP Rick & Morty - Accueil" },
    { name: "description", content: "Page d'accueil du TP Rick & Morty" },
  ];
}

export default function HomeRoute() {
  return <Home />;
}
