import React from 'react'

import './GuessCount.css'

// l'elemento (composant) GuessCount è un contatore di tentativi

const GuessCount = ({guesses})  => <div className="guesses">{guesses}</div>

export default GuessCount