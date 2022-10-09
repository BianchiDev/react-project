export default function Repeticao1(){
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'BIa',
        'Carlos',
        'Daniel',
        'Laura',
    ];

    function renderizarLista(){
        const itens = [];

        for(let i = 0; i < listaAprovados.length; i++){
            itens.push(<li>{listaAprovados[i]}</li>)
        }
        return itens
    }

   return(
    <ul>
      
        <li>{renderizarLista()}</li>
    </ul>
   ) 
}