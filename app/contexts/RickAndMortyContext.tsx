import React, { createContext, useContext, useEffect, useState,} from "react";

//type pour UN personnage venant de l'API Rick & Morty les champs.

export type RickAndMortyCharacter = {
    id: number;
    name: string;
    status?: string;
    species?: string;
    image?: string;
    origin?: {
        name?: string;
    };
};

//type des données disponibles dans le contexte

type RickAndMortyContextType = {
    characters: RickAndMortyCharacter[];          // tous les personnages récupérés
    selectedCharacter: RickAndMortyCharacter | null; // le personnage choisi
    loading: boolean;                             // en train de charger ?
    error: string | null;                         // message erreur 
    pickRandomCharacter: () => void;              // fonction pour changer de personnage
};

//création du contexte "undefined" vérifie  dans le hook.

const RickAndMortyContext = createContext<RickAndMortyContextType | undefined>(
    undefined
);

// provider appel api pour stocker les personnages choisi un personnage

export function RickAndMortyProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    // liste complète des personnage

    const [characters, setCharacters] = useState<RickAndMortyCharacter[]>([]);

    // un personnage sélectionné

    const [selectedCharacter, setSelectedCharacter] =
        useState<RickAndMortyCharacter | null>(null);

    // états de chargement et erreur

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // fait le fetch vers l'API

    useEffect(() => {
        async function fetchCharacters() {
            try {
                setLoading(true);
                setError(null);

                // appel api rick et morty

                const response = await fetch(
                    "https://api.sampleapis.com/rickandmorty/characters"
                );

                if (!response.ok) {
                    throw new Error("Réponse réseau non valide");
                }

                const data = (await response.json()) as RickAndMortyCharacter[];

                // on stocke les personnages

                setCharacters(data);

                // choisit personnage par défaut

                if (data.length > 0) {
                    setSelectedCharacter(data[0]);
                }
            } catch (err) {
                console.error(err);
                setError("Impossible de charger les personnages Rick & Morty.");
            } finally {
                setLoading(false);
            }
        }

        fetchCharacters();
    }, []);

    //choisi un personnage au hasard

    function pickRandomCharacter() {
        if (characters.length === 0) return;

        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomIndex];

        setSelectedCharacter(randomCharacter);
    }

    //objet qu'on rend disponible via le contexte

    const value: RickAndMortyContextType = {
        characters,
        selectedCharacter,
        loading,
        error,
        pickRandomCharacter,
    };

    return (
        <RickAndMortyContext.Provider value={value}>
            
            {children}

        </RickAndMortyContext.Provider>
    );
}

//au lieu d'écrire useContext partout

export function useRickAndMorty() {
    const context = useContext(RickAndMortyContext);

    if (!context) {
        throw new Error(
            "useRickAndMorty doit être utilisé à l'intérieur de RickAndMortyProvider"
        );
    }

    return context;
}
