import Filho from "./Filho";

export default function Pai(props){

    function falarComigo(param){
        console.log(param)
        console.log('Alguém falou comigo!')
    }
    return(
        <div>
            <Filho funcao={falarComigo}/>
        </div>
    )
}