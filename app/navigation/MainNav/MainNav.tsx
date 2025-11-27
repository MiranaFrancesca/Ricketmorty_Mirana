import { NavLink } from "react-router";

// composant de navigation principal

export default function MainNav() {
    return (
        <nav className="main-nav">
            <menu>
                <li>
                    {/* lien page accueil */}

                    <NavLink to="/">
                        Accueil
                    </NavLink>
                </li>

                <li>
                    {/* lien page personnage */}

                    <NavLink to="/character">
                        Personnage
                    </NavLink>
                </li>
            </menu>
        </nav>
    );
}
