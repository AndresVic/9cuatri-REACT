import React from 'react'
import ReactDom from 'react-dom'

import andres from './images/andres.jpeg'
import horario from './archivos/horario.pdf'

import Datos from './componentes/Datos'

const info = <div>
    <h1>Componentes</h1>
    <img src={andres} alt="Andres" width="200"/><br />
    <a href={horario} target="_black">Archivo 1</a><br />
    <Datos />
</div>

ReactDom.render(info, document.getElementById('root'));
