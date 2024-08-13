// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

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

const removerItemPedidos = (id) => {
    let remover = false;
    let listaAux = listaPedido.filter((produto) => {
      if (remover === false) {
        if (produto.id !== id) {
          return true;
        } else {
          remover = true;
          return false;
        }
      } else {
        return true;
      }
    });
    setListaPedido(listaAux);
  };
