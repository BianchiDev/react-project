export default function Titulo(props) {
 
    return props.pequeno ?(
        <>
                    <p>{props.Titulo}</p>
                    <p>{props.Subtitulo}</p>
        </>
   ) : (
                <>
            <h1>{props.Titulo}</h1>
            <h2>{props.Subtitulo}</h2>
        </>
        
        )
}
