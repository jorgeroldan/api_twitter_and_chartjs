// const API = 'https://swapi.co/api'
const API = 'https://api.giphy.com'

// example 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular

// API GIPHY
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=i5fuQg464oUOLaOpN1CQQUusWHGA5p78&limit=2

// Convertir el string de la response request en un objeto
function fetchJson(url) {
  return fetch(url).then(response => response.json())
}

// Escuchar un evento del botón y muestra el gráfico
function start() {
  document.getElementById('search-query').addEventListener('click', onSearchButtonClick)
  document.getElementById('magia-button').addEventListener('click', showChart)
}
 
// CHART
function showChart(){
    let grafico = document.getElementById('chart').style.display 
    if (grafico === 'none'){
        grafico = 'block'
    } 
}
// CALLBACKS
function onSearchButtonClick() {
  const queryValue = getQueryInputValue()
  getPerson(queryValue)
  .then(setQueryDescription)
}
 
// DOM FUNCTIONS
function getQueryInputValue() {
  return document.getElementById('search-query').value
}

// Insertar en el DOM el listado de propiedades del objeto en elemento <li>
function createListItem(prop, value) {
  return `<li>${prop}: ${value}</li>`
}

// Configurar la propiedades del objeto que quiero mostrar
function setQueryDescription(person) {
    let props = person
  const props = [
    'q',
    'api_key'
  ]
 
  // Guarda el elemento <ul> del DOM en el que vamos a incrustar los <li>
  const ul = document.getElementById('response-description')
 
  // Itera las propiedades del objeto y utiliza la funcion createListItem
  ul.innerHTML = props.map(prop => createListItem(prop, person[prop])).join('\n')
}
 
//REQUEST FUNCTIONS: Hace la consulta a la API con los parametros de la URL 
function getPerson(queryValue) {
  return fetchJson(`${API}/v1/gifs/search?q=${queryValue}&api_key=i5fuQg464oUOLaOpN1CQQUusWHGA5p78&limit=2`)
}

// API GIPHY
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=i5fuQg464oUOLaOpN1CQQUusWHGA5p78&limit=2

window.addEventListener('load', start)