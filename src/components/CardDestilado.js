import React from 'react';

// REQUISITO: Componente recebendo Props (variável objeto 'data') 

const CardDestilado = ({ data }) => {
  
  // REQUISITO: CSS Dinâmico (Muda a cor da borda baseada no dado) 
  
  const estiloDinamico = {
    borderLeft: `5px solid ${data.cor}`,
    transition: 'transform 0.3s'
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-sm" style={estiloDinamico}>
        {/* INTERPOLAÇÃO DE OBJETO (data.imagem, data.nome)  */}
        <img 
            src={data.imagem} 
            className="card-img-top img-fluid" 
            alt={data.nome} 
            style={{ maxHeight: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h3 className="card-title">{data.nome}</h3>
          <h6 className="text-muted mb-2">Origem: {data.origem}</h6>
          <p className="card-text">{data.descricao}</p>
          
          <button className="btn btn-sm btn-outline-primary">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDestilado;