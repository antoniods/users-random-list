import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame'


const VISUAL_PAUSE_MSECS = 750
const SIDE = 6
export const SYMBOLS = "☠️👽👾🤖🎃😺😹😻🤒🤕🤑🤠😈👹👺🤡💩👻"

//il component App è definito da una classe e non da una semplice funzione

class App extends Component {

  state = { //inizializza lo stato locale di cards + altri dati, ritrouviamo currentaPair, guesses e 
      cards: this.generateCards(), //inizializza il metodo
      currentPair: [], //est un tableau représentant la paire en cours de sélection par le joueur. À vide, 
      //aucune sélection en cours. Un élément signifie qu’une première carte a été retournée. Deux éléments 
      //signifient qu’on a retourné une seconde carte, ce qui déclenchera une analyse de la paire et l’avancée éventuelle de la partie.
      guesses: 0, //nombre de tentatives de la partie en cours (nombre de paires tentées, pas nombre de clics)
      matchedCardIndices: [], //iste les positions des cartes appartenant aux paires déjà réussies, et donc visibles de façon permanente.
    }
  
    // …


  generateCards(){
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }


  // recupera il simbolo di una carta e lo visualizza
  handleCardClick = (card) => {
    console.log(card, this)
  }
// Arrow fx for binding

getFeedbackForCard(index) {
  const { currentPair, matchedCardIndices } = this.state
  const indexMatched = matchedCardIndices.includes(index)

  if (currentPair.length < 2) {
    return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
  }

  if (currentPair.includes(index)) {
    return indexMatched ? 'justMatched' : 'justMismatched'
  }

  return indexMatched ? 'visible' : 'hidden'
}


  handleNewPairClosedBy(index) {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state

    const newPair = [currentPair[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses })
    if (matched) {
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
    }
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
  }



  render() {
      const { cards, guesses, matchedCardIndices } = this.state //cerca gli elementi nello state 
      const won = matchedCardIndices.length === cards.length

      return (
        <div className="memory">
          <GuessCount guesses={guesses} />
          {
          cards.map((card, index) => (
            <Card
              card={card}
              feedback={this.getFeedbackForCard(index)}
              index={index}
              key={index}
              onClick={this.handleCardClick}
          />
        ))}
        {won && <p>VINTO !</p>}
      </div>
    )
  }
}

export default App



    // return(
    //   <div className="memory">
        
    //     <GuessCount guesses = {0}/>
    //     <Card card="🌚" feedback="nascosto" onClick={this.handleCardClick} />
    //     <Card card="❎" feedback="esatto" onClick={this.handleCardClick} />
    //     <Card card="❌" feedback="sbagliato" onClick={this.handleCardClick} />
    //     <Card card="🌞" feedback="visibile" onClick={this.handleCardClick} />
    //     {/* <Card card="⭐" feedback="top" onClick={this.handleCardClick} /> */}
    //     <Card card="🎅" feedback="nascosto" onClick={this.handleCardClick} /> 
    //     {won && <p>Hai vinto !</p>}
    //   </div>
    // )