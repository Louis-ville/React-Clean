import React, { useState } from 'react'; // Import do useState

const CardDestilado = ({ data }) => {
 
  // Começa como 'false' (escondido)
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const estiloDinamico = {
    borderLeft: `5px solid ${data.cor}`,
    transition: 'transform 0.3s'
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-sm" style={estiloDinamico}>
        <img 
            src={data.imagem} 
            className="card-img-top img-fluid" 
            alt={data.nome} 
            style={{ maxHeight: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column"> {/* d-flex ajuda a alinhar o botão no final */}
          <h3 className="card-title">{data.nome}</h3>
          <h6 className="text-muted mb-2">Origem: {data.origem}</h6>
          
          {/* Renderização Condicional: Só mostra o <p> se 'mostrarDetalhes' for verdadeiro */}
          {mostrarDetalhes && (
             <p className="card-text mt-3 animate__animated animate__fadeIn">
                {data.descricao}
             </p>
          )}
          
          {/* Botão que alterna o estado (Toggle) */}
          <div className="mt-auto pt-3">
            <button 
                className={`btn btn-sm ${mostrarDetalhes ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                onClick={() => setMostrarDetalhes(!mostrarDetalhes)} // Inverte o valor (true vira false e vice-versa)
            >
                {/* Texto do botão muda dinamicamente */}
                {mostrarDetalhes ? "Ocultar Detalhes" : "Ver Detalhes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDestilado;