// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.

import { useState } from "react";
export default function Home(){
  return (
    <div>
        <h1>LOJA DE ROUPAS</h1>
    </div>
);
}
  const [listaProdutos, setlistaProdutos] = useState([
      {
          id:1,

          item:"CAMISA",

          preco:"R$ 139,99"
      },
      {
          id:2,

          item:"CALÇA",

          preco:"R$ 159,99"
      },
      {
          id:3,

          item:"MOLETOM",

          preco:"R$ 189,99"
      },
  ])

  return (
    <div className="produtos">
    {listaProdutos.map((produtos)=>
    <div key={produtos.id}>
      <p>{produtos.item}</p>
      <p>{produtos.preco}</p>
    </div>
  
  )}
    </div>
   
  );
