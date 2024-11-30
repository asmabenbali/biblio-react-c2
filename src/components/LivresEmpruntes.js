import React, { useContext } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';

const LivresEmpruntes = () => {
    const { emprunts, returnLivre } = useContext(EmpruntContext); 

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Livres Empruntés</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                {emprunts.map((livre) => (
                    <div key={livre.id} className="col">
                        <div className="card h-100 shadow-lg rounded-3">
                            <div className="card-body">
                                <h5 className="card-title text-center">{livre.titre}</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-center">{livre.auteur}</h6>

                                <div className="d-flex justify-content-center mt-3">
                                    <button
                                        onClick={() => returnLivre(livre.id)}
                                        className="btn btn-danger"
                                    >
                                        Rendre
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LivresEmpruntes;
