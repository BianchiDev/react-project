import Titulo from "../../components/Titulo";

export default function usandoTitulo(){
    return (
        <div>
            <Titulo
            Titulo = "Página de cadastro"
            Subtitulo = "Incluir, alterar e excluir"
            pequeno = {true}
            />
             <Titulo
            Titulo = "Página de cadastro"
            Subtitulo = "Incluir, alterar e excluir"
            pequeno={false}
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