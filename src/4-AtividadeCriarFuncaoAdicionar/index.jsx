// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

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
          </div>
        ))}
      </div>
    </div>
  );
}