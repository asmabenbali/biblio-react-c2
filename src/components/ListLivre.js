import React, { useState, useContext } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';
import Message from './Message'; // Assure-toi d'importer ton composant Message

const ListLivre = ({ livres }) => {
    const { emprunterLivre, returnLivre, emprunts } = useContext(EmpruntContext);
    const [message, setMessage] = useState(null); // État pour gérer le message

    const handleEmprunter = (livre) => {
        // Appel à la fonction d'emprunt
        if (livre.disponible && !emprunts.some(l => l.id === livre.id)) {
            emprunterLivre(livre);
            // Afficher le message de succès en vert
            setMessage({ type: 'success', text: 'Livre emprunté avec succès!' });

            // Disparaître après 3 secondes
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        } else {
            // Si le livre n'est pas disponible ou déjà emprunté
            setMessage({ type: 'error', text: 'Ce livre est déjà emprunté ou indisponible.' });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        }
    };

    return (
        <div className="container my-5">
            <style>
                {`
                    .card {
                        min-height: 200px;  /* Augmenter la hauteur minimale de la carte */
                        transition: transform 0.3s ease, box-shadow 0.3s ease;  /* Effet de transition doux */
                        display: flex;
                        flex-direction: column; /* Disposer les éléments de haut en bas */
                        justify-content: center; /* Centrer verticalement */
                        align-items: center; /* Centrer horizontalement */
                    }

                    /* Effet de survol de la carte */
                    .card:hover {
                        transform: scale(1.05);  /* Légère augmentation de la taille au survol */
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);  /* Ajouter une ombre douce */
                    }

                    .card-body {
                        display: flex;
                        flex-direction: column; /* Empiler les éléments verticalement */
                        justify-content: center; /* Centrer verticalement */
                        align-items: center; /* Centrer horizontalement */
                        text-align: center; /* Centrer le texte */
                        padding: 15px;  /* Augmenter légèrement le padding */
                    }

                    .card-title {
                        font-size: 1.2rem;  /* Augmenter légèrement la taille du titre */
                    }

                    .btn {
                        font-size: 1rem;  /* Agrandir légèrement la taille du bouton */
                    }
                `}
            </style>

            <h2 className="text-center mb-4">Liste des Livres</h2>

            {/* Affichage du message sous forme de popup */}
            <Message message={message} onClose={() => setMessage(null)} />

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                {livres.map((livre) => (
                    <div key={livre.id} className="col">
                        <div className="card h-100 shadow-lg rounded-3">
                            <div className="card-body">
                                <h5 className="card-title">{livre.titre}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{livre.auteur}</h6>

                                {/* Si le livre est disponible et non encore emprunté, afficher le bouton "Emprunter" */}
                                {!emprunts.some(l => l.id === livre.id) && livre.disponible && (
                                    <div className="d-flex justify-content-center">
                                        <button
                                            onClick={() => handleEmprunter(livre)}
                                            className="btn btn-primary"
                                        >
                                            Emprunter
                                        </button>
                                    </div>
                                )}

                                {/* Si le livre est emprunté ou indisponible, afficher un bouton "Indisponible" */}
                                {emprunts.some(l => l.id === livre.id) || !livre.disponible ? (
                                    <div className="d-flex justify-content-center">
                                        <button
                                            className="btn btn-danger"
                                            disabled
                                        >
                                            Indisponible
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListLivre;
