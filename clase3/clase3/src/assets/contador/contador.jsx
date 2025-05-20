import React, {useState} from "react";

const contador = ()=>{
    const [contador, setContador] = useState(0)

    return(
        <div>
        <p>contador: {contador}</p>
        <button onClick = {()=>setContador(contador + 1) } >incrementar</button>


        </div>
    )
}


export default contador