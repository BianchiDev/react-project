import If from "../../components/if"

export default function Conditional2(){
    const numero = 5
    return(
        <div>
            <If teste={numero %2 === 0}>
                <h1>O numúmero {numero} é par</h1>
            </If>
            <If teste={numero %2 === 1}>
                <h1>O numúmero {numero} é ímpar</h1>
            </If>
        </div>
    )
}