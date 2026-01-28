
import React, { useState, useEffect } from 'react';
import './style.css';


import NavbarDestilados from './components/NavbarDestilados';
import CardDestilado from './components/CardDestilado';
import FooterNewsletter from './components/FooterNewsletter';
import Header from './components/Header'; // O NOVO HEADER
import { useFetch } from './hooks/useFetch';

function App() {
  const [filtro, setFiltro] = useState("Todos");
  const { data: destilados, loading, error } = useFetch('/destilados.json');

  // EVENTO DE TECLADO  
  useEffect(() => {
    const lidarComTecla = (e) => {
      // Se apertar ESC (Escape), reseta o filtro para "Todos"
      if (e.key === 'Escape') {
        setFiltro("Todos");
      }
    };

    // Adiciona o ouvinte de evento na janela inteira
    window.addEventListener('keydown', lidarComTecla);

    // Função de limpeza (remove o evento quando sai da página)
    return () => {
      window.removeEventListener('keydown', lidarComTecla);
    };
  }, []); // Array vazio = roda apenas uma vez ao iniciar


  return (
    <div className="App">
      
      {/* Usando o Componente com CSS Modules */}
      <Header />

      <NavbarDestilados setDestilado={setFiltro} />

      <main className="container mb-5"> 
        <div className="text-center mb-4">
            <h2>
              {loading ? "Carregando..." : (filtro === "Todos" ? "Catálogo Completo" : `Sobre ${filtro}`)}
            </h2>
            {/* Dica visual para o usuário sobre o evento de teclado */}
            {filtro !== "Todos" && <small className="text-warning">(Pressione ESC para limpar)</small>}
        </div>

        {loading && <div className="text-center"><div className="spinner-border text-primary"></div></div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {destilados && destilados
              .filter(item => filtro === "Todos" ? true : item.nome === filtro)
              .map((item) => (
                <CardDestilado key={item.id} data={item} />
            ))}
        </div>
      </main>

      <FooterNewsletter />
    </div>
  );
}

export default App;