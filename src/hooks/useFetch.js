import { useState, useEffect } from "react";

// Hook customizado para fazer requisições HTTP (GET)
// Recebe a URL (url) como parâmetro
export const useFetch = (url) => {
  const [data, setData] = useState(null);          // Guarda os dados (os destilados)
  const [loading, setLoading] = useState(true);    // Controla o "Carregando..."
  const [error, setError] = useState(null);        // Guarda erros, se houver

  // useEffect: Executa a busca assim que o componente carrega
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const res = await fetch(url); // fetch API (Requisito)
        
        if (!res.ok) {
            throw new Error("Erro ao buscar dados");
        }
        
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Se a URL mudar, ele busca de novo

  // Retorna os 3 estados para quem for usar
  return { data, loading, error };
};