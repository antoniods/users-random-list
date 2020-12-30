import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'


// creazione di un gioco di carte 6*6 con diverse diverse modalità di visualizzazione

const HIDDEN_SYMBOL = '?'

// inserire props(infirmazioni) nel Composant Card, card è il tipo di simbolo, feedback è il display status del simbolo
const Card = ({ card, feedback, index, onClick }) => (
    <div className={`card ${feedback}`} onClick={() => onClick(index)}>
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  )
  //déclarer la prop dans ses  propTypes
  Card.propTypes = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
      'hidden',
      'justMatched',
      'justMismatched',
      'visible',
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  }

// espressione linea 12 : se lo status di feedback è hidden allora visualizzo il punto interrogativo senno' la carta
// linea 10 trasformo il <div className= "carta"></div> in 

export default Card