// const objeto = document.createElement('h2')
//   objeto.innerText = 'UTVT 2021'

// const objeto2 = document.createElement('b')
//   objeto.innerText = 'Ing. Desarrollo y Gestíon de Software'

// const informacion = document.getElementById('root')
// informacion.appendChild(objeto)

// const informacion2 = document.getElementById('info')
// informacion2.appendChild(objeto2)

// ReactDOM
import React from 'react-dom'
import ReactDom from 'react-dom'

const nombre = 'Andres Victoriano'
const year = '21 años'
  
const objeto = <h2>UTVT - 2021 {nombre}, {year}</h2>

const informacion = document.getElementById('root')
ReactDom.render(objeto, informacion)

const objeto2 = <b>Esto es una prueba ReactDom</b>

const informacion2 = document.getElementById('info')
ReactDom.render(objeto2, informacion2)

// -----------------------------

const arreglo = {
  nombre: 'Andres Victoriano',
  day: 18,
  month: 'Enero',
  year: 2000
}

const objeto3 = <b>Hola {arreglo.nombre} tu fecha de nacimiento es: {arreglo.day} de {arreglo.month} de {arreglo.year}</b>
const informacion3 = document.getElementById('info2')
ReactDom.render(objeto3, informacion3)

// --------------------------------

const num1 = 10;
const num2 = 3;

const numeros = {
  num1: 2,
  num2: 5,
  num3: 7,
  num4: 9
}

const objeto4 = <div>
  <br /><h2>Operaciones Matematicas</h2>
  {num1} + {num2} = {num1+num2} <br />
  {num1} - {num2} = {num1-num2} <br />
  {num1} / {num2} = {num1/num2} <br /><br />
  {numeros.num1} * {numeros.num3} = {numeros.num1*numeros.num3} <br /><br />
  {(numeros.num2 > numeros.num1)? 'Mayor':'Menor'}<br />
  {(numeros.num2 < numeros.num1)? 'Mayor':'Menor'}<br />
</div>

const informacion4 = document.getElementById('mate')

ReactDom.render(objeto4, informacion4)