import React, { useRef } from 'react';
import './styles/style.css';
import { get_corte_by_RCC, get_cortes_between_RCCs, get_corte_by_date, get_cortes_between_dates } from './services/api';

export default function App() {
    const inputByRCCRef = useRef(null);
    const inputBetweenRCC1Ref = useRef(null);
    const inputBetweenRCC2Ref = useRef(null);
    const inputByDateRef = useRef(null);
    const inputBetweenDates1Ref = useRef(null);
    const inputBetweenDates2Ref = useRef(null);

    const handleSearchByRCC = () => {
        const rcc = inputByRCCRef.current.value;
        get_corte_by_RCC(rcc);
    };

    const handleSearchBetweenRCCs = () => {
        const rcc1 = inputBetweenRCC1Ref.current.value;
        const rcc2 = inputBetweenRCC2Ref.current.value;
        get_cortes_between_RCCs(rcc1, rcc2);
    };

    const handleSearchByDate = () => {
        const date = inputByDateRef.current.value;
        get_corte_by_date(date);
    };

    const handleSearchBetweenDates = () => {
        const date1 = inputBetweenDates1Ref.current.value;
        const date2 = inputBetweenDates2Ref.current.value;
        get_cortes_between_dates(date1, date2);
    };

    const deleteAccordionItems = () => {
        const accordionContainer = document.getElementById('accordionCortes');
        if (accordionContainer) {
            accordionContainer.innerHTML = ''; // Elimina el contenido actual

            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('accordion'); // Agrega las clases de Bootstrap según necesites
            emptyDiv.id = 'accordionCortes';

            accordionContainer.appendChild(emptyDiv); // Agrega el div vacío
        }
    };

    return (
        <div className="container mt-5">
            <h1>Información de Cortes</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6>Buscar por RCC</h6>
                        <div className="input-group w-75 mb-3">
                            <input type="text" className="form-control" placeholder="RCC" aria-label="RCC" aria-describedby="basic-addon2" ref={inputByRCCRef} />
                            <button className="btn btn-outline-success" type="button" onClick={handleSearchByRCC}>Buscar</button>
                        </div>
                        <h6>Buscar entre RCCs</h6>
                        <div className="input-group w-75 mb-3">
                            <input type="text" className="form-control" placeholder="RCC 1" aria-label="RCC 1" aria-describedby="basic-addon2" ref={inputBetweenRCC1Ref} />
                            <input type="text" className="form-control" placeholder="RCC 2" aria-label="RCC 2" aria-describedby="basic-addon2" ref={inputBetweenRCC2Ref} />
                            <button className="btn btn-outline-success" type="button" onClick={handleSearchBetweenRCCs}>Buscar</button>
                        </div>
                    </div>
                    <div className="col">
                        <h6>Buscar por Fecha</h6>
                        <div className="input-group w-75 mb-3">
                            <input type="date" className="form-control" placeholder="DD/MM/YY" aria-label="DD/MM/YY" aria-describedby="basic-addon2" ref={inputByDateRef} />
                            <button className="btn btn-outline-success" type="button" onClick={handleSearchByDate}>Buscar</button>
                        </div>
                        <h6>Buscar entre Fechas</h6>
                        <div className="input-group w-75 mb-3">
                            <input type="date" className="form-control" placeholder="DD/MM/YY" aria-label="DD/MM/YY" aria-describedby="basic-addon2" ref={inputBetweenDates1Ref} />
                            <input type="date" className="form-control" placeholder="DD/MM/YY" aria-describedby="basic-addon2" ref={inputBetweenDates2Ref} />
                            <button className="btn btn-outline-success" type="button" onClick={handleSearchBetweenDates}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <h2>Lista de Cortes</h2>
                    <div className="row justify-content-around mt-3">
                        <div className="col-md-12">
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".accordion-collapse" aria-expanded="false" aria-controls="accordionCortes">
                                Expandir/Cerrar Todos
                            </button>
                            <button className="btn btn-danger" type="button" onClick={deleteAccordionItems}>
                                Borrar Todas Las Búsquedas
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className="accordion" id="accordionCortes"></div>
                </div>
            </div>
        </div>
    );
}
