import Item from "../../components/item";
import Lista from "../../components/Lista";

export default function  componentComFilho(){
    return(
        <div>
           <Lista>
                <Item conteudo="Item #11"/>
                <Item conteudo="Item #12"/>
                <Item conteudo="Item #13"/>
           </Lista>
        </div>
    )
}