import React from "react";

// le type des props que notre composant reçoit
type ArticleProps = {
    // children
    children: React.ReactNode;
};

// composant fonctionnel Article
export default function Article({ children }: ArticleProps) {
    return (
        <article className="article">
            {/* on affiche le contenu reçu */}
            {children}
        </article>
    );
}
