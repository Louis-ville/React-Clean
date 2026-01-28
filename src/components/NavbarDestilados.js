import React from 'react';

// Este componente recebe uma função "setDestilado" como propriedade (Prop)
// Quando clicamos num botão, ele avisa o App.js qual destilado foi escolhido.

const NavbarDestilados = ({ setDestilado }) => {
  
  // Lista de destilados (Array de Strings - Requisito: Variável Array)
  const destilados = ["Todos", "Vodka", "Gin", "Rum", "Tequila", "Whiskey"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">Escolha o Destilado:</span>
        
        <div className="d-flex flex-wrap gap-2">
          {/* Loop (map) para criar os botões - Requisito: Reuso via Loop */}
          {destilados.map((item) => (
            <button 
              key={item} 
              className="btn btn-outline-light btn-sm"
              onClick={() => setDestilado(item)} // Evento de Mouse
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarDestilados;