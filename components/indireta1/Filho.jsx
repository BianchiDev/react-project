export default function Filho(props){
    //"Passei no ENEM!"
    console.log(props.funcao)
    return(
        <div>
            <h1>Filho #1</h1>
            <button onClick={() => props.funcao("Passei no ENEM!")}>Falar com o Pai</button>
        </div>
    )
}