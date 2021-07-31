import { createElement, clearChildren } from './utils'

export function init () {
  const startGameElement = createElement('start-game', {
    tag: 'button',
    onclick: () => startGame(controlsElement, promptElement),
    children: [
      document.createTextNode('Start Game')
    ]
  })

  const controlsElement = createElement('controls', {
    tag: 'div',
    children: [
      startGameElement
    ]
  })
  
  const promptElement = createElement('prompt', {
    tag: 'p',
    children: [
      document.createTextNode('Welcome! Click on the \'Start Game\' button to begin.')
    ]
  })
  
  const gameBoardElement = createElement('game-board', {
    tag: 'div',
    children: [ promptElement, controlsElement ]
  })
  
  document.body.appendChild(gameBoardElement)
}

const options = ['Rock', 'Paper', 'Scissors']

function startGame(controlsElement, promptElement) {
  setPrompt(promptElement, 'Select rock, paper, or scissors')

  clearChildren(controlsElement);
  options.forEach((option, index) => {
    const img = new Image(100, 100);
    img.src = require(`./assets/${option.toLowerCase()}.png`);
    img.onclick = () => playGame(index, promptElement);
    controlsElement.appendChild(img);
  });
}

function setPrompt (promptElement, text) {
  clearChildren(promptElement);
  promptElement.appendChild(
    document.createTextNode(text)
  );
}

function announceResult (promptElement, userSelection, computerSelection, result) {
  setPrompt(promptElement, `You selected: ${userSelection}. Computer selected: ${computerSelection}. ${result}!`)
}

function playGame (user, promptElement) {
  const computer = Math.floor(Math.random() * 3)
  if (user === computer) {
    announceResult(promptElement, options[user], options[computer], 'It is a tie')
  } else if (
    ( user === 0 && computer === 2 ) // rock beats scissors
    || ( user === 1 && computer === 0) // paper beats rock
    || ( user === 2 && computer === 1) // scissors beats paper
  ) {
    announceResult(promptElement, options[user], options[computer], 'You win')
  } else {
    announceResult(promptElement, options[user], options[computer], 'You lose')
  }
}