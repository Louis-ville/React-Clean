import React, { useState } from 'react';

const FooterNewsletter = () => {
  const [enviado, setEnviado] = useState(false);

  const lidarComEnvio = (evento) => {
    evento.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="text-center mb-4">Inscreva-se na nossa Newsletter</h3>
            <p className="text-center text-muted mb-4">Receba receitas exclusivas e histórias sobre seus drinks favoritos.</p>

            {enviado && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Sucesso!</strong> Cadastro realizado com sucesso.
                <button type="button" className="btn-close" onClick={() => setEnviado(false)}></button>
              </div>
            )}

            <form onSubmit={lidarComEnvio} className="card p-4 text-dark shadow">
              <div className="row g-3">
                
                {/* 1. TIPO TEXTO */}
                <div className="col-md-6">
                  <label className="form-label">Nome Completo</label>
                  <input type="text" className="form-control" placeholder="Seu nome" required />
                </div>

                {/* 2. TIPO EMAIL */}
                <div className="col-md-6">
                  <label className="form-label">E-mail</label>
                  <input type="email" className="form-control" placeholder="seu@email.com" required />
                </div>

                {/* 3. TIPO DATA */}
                <div className="col-md-6">
                  <label className="form-label">Data de Nascimento</label>
                  <input type="date" className="form-control" required />
                </div>

                {/* 4. TIPO SELECT */}
                <div className="col-md-6">
                  <label className="form-label">Qual seu favorito?</label>
                  <select className="form-select" required>
                    <option value="">Selecione...</option>
                    <option value="vodka">Vodka</option>
                    <option value="gin">Gin</option>
                    <option value="rum">Rum</option>
                    <option value="tequila">Tequila</option>
                    <option value="whiskey">Whiskey</option>
                  </select>
                </div>

                {/* 5. TIPO TEL  */}
                <div className="col-12">
                  <label className="form-label"> Celular</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="(45)99911-2223" 
                    //pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" // Opcional: validação básica
                    required 
                  />
                </div>

                <div className="col-12 text-center mt-3">
                  <button type="submit" className="btn btn-primary px-5">Cadastrar</button>
                </div>
              </div>
            </form>

            <div className="text-center mt-4 text-muted">
              <small>&copy; 2026 Unioeste - Todos os direitos reservados</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNewsletter;