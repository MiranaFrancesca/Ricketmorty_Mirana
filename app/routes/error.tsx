import Article from "~/components/Article/Article";

export default function ErrorPage() {
    return (
        <Article>
            <h1> Erreur 404 — Oups !</h1>
            <p>La page que tu cherches n'existe pas...</p>

            <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExazRqZWxiMmNjeTNqbzhzbmdsbTExbWczNnBpcWQwcGI2YWduamc5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xYqKJsgR6qZFK/giphy.gif"
                alt="Morty danse"
                style={{
                    marginTop: "1rem",
                    borderRadius: "12px",
                    maxWidth: "260px"
                }}
            />

            <p style={{ marginTop: "1rem" }}>
                Essaie plutôt le menu en haut 🥒
            </p>
        </Article>
    );
}
