// db.js
// REQUISITO: Variável do tipo Array de Objetos (contém dados dos destilados)
export const destiladosDB = [
    {
      id: 1,
      nome: "Vodka",
      origem: "Rússia / Polônia",
      descricao: "Bebida destilada, incolor e quase sem sabor. Base de 90% dos coquetéis modernos.",
      imagem: "/Vodka.png", // Certifique-se que esta imagem está na pasta PUBLIC (ou src se preferir importar)
      cor: "#007bff" // Azul
    },
    {
      id: 2,
      nome: "Gin",
      origem: "Holanda",
      descricao: "Destilado aromatizado com bagas de zimbro. Essencial para o Martini.",
      imagem: "/Gin.png", 
      cor: "#28a745" // Verde
    },
    {
      id: 3,
      nome: "Rum",
      origem: "Caribe",
      descricao: "Feito do melaço da cana-de-açúcar. A alma do Mojito.",
      imagem: "/Rum.png", 
      cor: "#ffc107" // Amarelo
    },
    {
      id: 4,
      nome: "Tequila",
      origem: "México",
      descricao: "Feita da planta Agave Azul. Base da Margarita.",
      imagem: "/Tequila.png", 
      cor: "#dc3545" // Vermelho
    },
    {
      id: 5,
      nome: "Whiskey",
      origem: "Escócia / Irlanda / EUA",
      descricao: "Destilado de grãos envelhecido em barris de madeira.",
      imagem: "/Whiskey.png", 
      cor: "#6c757d" // Cinza
    }
  ];