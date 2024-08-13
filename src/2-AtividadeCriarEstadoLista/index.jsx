// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

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



