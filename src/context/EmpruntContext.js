import React, { createContext, useState } from 'react';
                        // contexte pour les emprunts

export const EmpruntContext = createContext();
export const EmpruntProvider = ({ children }) => {
    const [emprunts, setEmprunts] = useState([]); 

                        //  emprunter un livre

    const emprunterLivre = (livre) => {
        if (livre.disponible) { 
            setEmprunts([...emprunts, livre]); 
        }
    };
                        // rendre un livre
                        
    const returnLivre = (id) => {
        setEmprunts(emprunts.filter((livre) => livre.id !== id)); 
    };

    return (
        <EmpruntContext.Provider value={{ emprunts, emprunterLivre, returnLivre }}>
            {children}
        </EmpruntContext.Provider>
    );
};
