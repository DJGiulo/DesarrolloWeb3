//conector entre componentes vv :3
import React from "react";
import componente2 from "../componente2/componente2";

const componente1 = ()=> {

    let datosPersonales= {
        nombre: "Alonzo",
        edad: 14,
        dni: 42667956,
        correo: "alonzo@gmail.com",
    }
    
    return( 
        <>
        <h1>comunicación entre componentes</h1>
        <componente2 nombre = {datosPersonales.nombre}
                    edad= {datosPersonales.edad}
                    dni= {datosPersonales.dni}
                    correo= {datosPersonales.correo}/>

        </>
    )
}

export default componente1