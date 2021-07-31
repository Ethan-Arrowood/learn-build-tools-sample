import { init } from './game.js'
import { createElement } from './utils'

import './style.css'
// import './assets/fira_code/fira_code.css'

const titleElement = createElement('title', {
  tag: 'h1',
  children: [
    document.createTextNode('<| Rock Paper Scissors |>')
  ]
})

document.body.appendChild(titleElement)

init()