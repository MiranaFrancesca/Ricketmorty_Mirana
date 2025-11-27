import "./app.css";

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";

//importe le provider r et m
import { RickAndMortyProvider } from "~/contexts/RickAndMortyContext";

// Header + Footer
import Header from "~/layouts/Header/Header";
import Footer from "~/layouts/Footer/Footer";

// métadonnées par défaut
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "TP Rick & Morty" },
    {
      name: "description",
      content: "TP React avec React Router et l'API Rick & Morty",
    },
  ];
}

// layout structure HTML commune à toutes les pages
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        {/* tout enveloppée dans le provider */}
        <RickAndMortyProvider>

          {/* conteneur général */}
          <div className="app-shell">

            <Header />

            {/* contenu de chaque page */}
            <main className="main-content">
              {children}
            </main>

            {/* footer */}
            <Footer />

          </div>
        </RickAndMortyProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// racine React Router affiche les routes via outlet
export default function Root() {
  return <Outlet />;
}
