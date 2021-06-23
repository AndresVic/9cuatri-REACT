import React from 'react'
import ReactDom from 'react-dom'

const texto = {
    br1: '<br>',
    br2: '<br />',
    img: '<img></img>',
    img2: '<img />',
    hr: '<hr>',
    hr2: '<hr />',
}
const objeto = <div>
    <h2>Etiquetas HTML / tags / Elementos</h2><br />
    <b>Para una imagen:</b><br />
    <p>De esta manera <b>{texto.img}</b> se cambia a esta <b>{texto.img2}</b>.</p><br />
    <b>Para un salto de linea:</b><br />
    <p>De esta manera <b>{texto.br}</b> se cambia a esta <b>{texto.br2}</b>.</p><br />
    <b>Para el uso de un hr</b><br />
    <p>De esta manera <b>{texto.hr}</b> se cambia a esta <b>{texto.hr2}</b>.</p><br />
</div>

// MANERA 1
// const informacion = document.getElementById('root')
// ReactDom.render(objeto, informacion)

// MANERA 2 mas corta o simplificada
ReactDom.render(objeto, document.getElementById('root'))