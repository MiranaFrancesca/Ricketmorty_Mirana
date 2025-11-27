import type { Route } from "./+types/character";
import Character from "~/pages/Character/Character";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "TP Rick & Morty - Personnage" },
        { name: "description", content: "Affiche un personnage Rick & Morty" },
    ];
}

export default function CharacterRoute() {
    return <Character />;
}
