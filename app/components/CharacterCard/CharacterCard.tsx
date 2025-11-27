import { useRickAndMorty } from "~/contexts/RickAndMortyContext";

export default function CharacterCard() {
    // récupère ce dont on a besoin dans le contexte
    const { selectedCharacter, loading, error, pickRandomCharacter } =
        useRickAndMorty();

    // en train de charger
    if (loading) {
        return <p>Chargement du personnage...</p>;
    }

    // une erreur
    if (error) {
        return <p>{error}</p>;
    }

    // pas d'erreur, ni de chargement, mais pas de personnage
    if (!selectedCharacter) {
        return <p>Aucun personnage à afficher.</p>;
    }

    // normal on a un personnage
    return (
        <section className="character-card">
            {selectedCharacter.image && (
                <img
                    src={selectedCharacter.image}
                    alt={selectedCharacter.name}
                    className="character-card__image"
                />
            )}

            <h2>{selectedCharacter.name}</h2>

            {selectedCharacter.species && (
                <p>Espèce : {selectedCharacter.species}</p>
            )}

            {selectedCharacter.status && (
                <p>Statut : {selectedCharacter.status}</p>
            )}

            {selectedCharacter.origin?.name && (
                <p>Origine : {selectedCharacter.origin.name}</p>
            )}

            <button
                className="character-card__button"
                onClick={pickRandomCharacter}
            >
                Un autre personnage au hasard 
            </button>

        </section>
    );
}
