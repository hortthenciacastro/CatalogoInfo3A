// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

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
      <div className="bloco-principal">
<div className="bloco-produtos">
  {listaProdutos.map((produto) => (
    <div key={produto.id}>
         <p>{produto.item}</p>
         <p>{produto.preco}</p>
      <button class="button-adicionar"
      onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
    </div>
  ))}
</div>
<div class="bloco-pedidos">
  <h1>Pedidos</h1>
  {listaPedido.map((produto) => (
    <div key={produto.id}>
      <p>{produto.item}</p>
      <p>{produto.preco}</p>
    </div>
  ))}
</div>
</div></div>
)}