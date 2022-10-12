import Filho from "./Filho";

export default function Pai(props){
      return(
        <div>
            <h1>Família {props.familia}</h1>
          <Filho nome="Kayky" familia={props.familia}/>
          <Filho nome="Pedro" familia ={props.familia}/>
          <Filho nome="Sara" familia={props.familia}/>
          <Filho nome="Iara" {...props}/> {/* Operador spreids  */}
        </div>
    )
}