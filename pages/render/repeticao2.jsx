import listaProduto from "../../data/listaProduto"

export default function Repeticao2(){

    const comBorda ={ 
        border: "1px solid #000",
    }

    function renderizarLista(){
       
        return listaProduto.map(produto => {
            return(
                <tr key={produto.id}>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
        })
    }



    return(
        <div>
        <table style={comBorda}>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {renderizarLista()}
            </tbody>
        </table>
        </div>
    )
}