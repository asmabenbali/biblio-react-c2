
import React, { useState, useEffect } from 'react';
import { EmpruntProvider } from './context/EmpruntContext'; 
import ListLivre from './components/ListLivre'; 
import LivresEmpruntes from './components/LivresEmpruntes'; 
import { fetchLivres } from './services/api'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    const [livres, setLivres] = useState([]); // Liste des livres

    useEffect(() => {
        fetchLivres()
            .then((data) => setLivres(data))
            .catch(() => console.error('Erreur lors du chargement des livres'));
    }, []);

    return (
        <EmpruntProvider>
            <div>
                <ListLivre livres={livres} />
                <LivresEmpruntes />
            </div>
        </EmpruntProvider>
    );
};

export default App;
