// const objeto = document.createElement('h2')
//   objeto.innerText = 'UTVT 2021'

// const objeto2 = document.createElement('b')
//   objeto.innerText = 'Ing. Desarrollo y Gestíon de Software'

// const informacion = document.getElementById('root')
// informacion.appendChild(objeto)

// const informacion2 = document.getElementById('info')
// informacion2.appendChild(objeto2)

import React from 'react-dom'
import ReactDom from 'react-dom'

const objeto = <h2>UTVT - 2021</h2>
const informacion = document.getElementById('info')
ReactDom.render(objeto, informacion)

const objeto2 = <b>Esto es una prueba ReactDom</b>
const informacion2 = document.getElementById('info2')
ReactDom.render(objeto2, informacion2)