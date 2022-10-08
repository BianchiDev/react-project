import Estilo from "../../components/Estilo";


export default function usandoEstilo() {
    return (
        <>
            <div>
                <Estilo/>
            </div>
            <div>
                <Estilo numero={1} />
            </div>
            <div>
                <Estilo numero={-1} />
            </div>
        </>
    )
}
/* O componente Estilo é chamado,
 dentro dele temos a condição seguinte:
 Se o númeor for maior que " 0 " ele retorna verde,
 se não ele retorna vermelho*/
