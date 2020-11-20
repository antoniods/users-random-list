import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './Card'
import GuessCount from './GuessCount'

class App extends Component {
  render() {
    return(
      <div className="memory">
        
        <GuessCount guesses = {0}/>
        <Card card="🌚" feedback="nascosto"/>
        <Card card="❎" feedback="esatto"/>
        <Card card="❌" feedback="sbagliato"/>
        <Card card="🌞" feedback="visibile"/>
        <Card card="⭐" feedback="top"/>
        <Card card="🎅" feedback="natale"/>
      </div>
    )
  }
}

export default App
