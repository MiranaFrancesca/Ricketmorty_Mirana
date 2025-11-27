import MainNav from "~/navigation/MainNav/MainNav";
import "./Header.css";

export default function Header() {
    return (
        <header className="main-header">
            <h1 className="main-title">Rick & Morty : L'Aventure de Mirana </h1>

            {/* menu de navigation */}
            <MainNav />
        </header>
    );
}
