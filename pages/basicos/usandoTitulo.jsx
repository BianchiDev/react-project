import Titulo from "../../components/Titulo";

export default function usandoTitulo(){
    return (
        <div>
            <Titulo
            Titulo = "Página de cadastro"
            Subtitulo = "Incluir, alterar e excluir"
           /* e'entendido que o valor pequeno esta false */
            />
             <Titulo
            Titulo = "Página de cadastro"
            Subtitulo = "Incluir, alterar e excluir"
            pequeno /* endende-se que por esta aqui mesmo sem definir true ou false ele é verdadeiro */
            />
             <Titulo
            Titulo = "Página de cadastro"
            Subtitulo = "Incluir, alterar e excluir"
            pequeno={true}
            />
        </div>
    )
}
/* Quando o paramente pequeno é "False", ele recebe um h1 e um h2
quando true, eles recebem paragŕafos */