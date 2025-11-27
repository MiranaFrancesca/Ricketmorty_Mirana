import Article from "~/components/Article/Article";

export default function Home() {
    
    return (
        <Article>
            <h1> 🥒 Bienvenue sur mon TP Rick & Morty 🥒 </h1>
            <p>
                Utilise mon menu pour voir un personnage 🥒
            </p>

            <img
                src="/public/assets/retm.jpg"
                alt="Rick and Morty"
                className="home-image"
            />

        </Article>
    );
}

