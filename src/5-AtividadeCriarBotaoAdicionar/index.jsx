// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

import { useState } from "react";

export default function Home() {
  const [listaProdutos, setListaProdutos] = useState([
    {
      id: 1,

      item: "CAMISA",

      preco: "R$ 139,99"
    },
    {
      id: 2,

      item: "CALÇA",

      preco: "R$ 159,99"
    },
    {
      id: 3,

      item: "MOLETOM",

      preco: "R$ 189,99"
    }
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {  
    setListaPedidos([...listaPedidos, 
        objeto
    ]);
  };

  return (
    <div>
      <h1>LOJA DE ROUPAS</h1>
      <div className="produtos">
        {listaProdutos.map((produto) => (
          <div key={produto.id}>
            <p>{produto.item}</p>
            <p>{produto.preco}</p>
            <button onClick={() => adicionarItemPedidos(produto)}>Adicionar ao Pedido</button>
          </div>
        ))}
      </div>
    </div>
  );
}