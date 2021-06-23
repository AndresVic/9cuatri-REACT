import React from 'react'

import pig from '../images/pig.jpg'
import horario2 from '../archivos/horario.pdf'

class Datos extends React.Component{
    render(){
        return <div>
            <h2>Componente 1</h2><br />
            <img src={pig} width="200" alt="pig"/><br />
            <a href={horario2} target="_black">Archivo 2</a>
        </div>
    }
}

export default Datos