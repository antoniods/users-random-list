import React from 'react'
import './Card.css'


// creazione di un gioco di carte 6*6 con diverse diverse modalità di visualizzazione

const HIDDEN_SYMBOL = '?'

// inserire props(infirmazioni), card è il tipo di simbolo, feedback è il display status del simbolo
const Card = ({card, feedback}) => ( 
<div className={`card ${feedback}`}>
    <span className="symbol">
        {feedback === 'nascosto' ? HIDDEN_SYMBOL :  card}
    </span>
</div>    
)

// espressione linea 12 : se lo status di feedback è hidden allora visualizzo il punto interrogativo senno' la carta
// linea 10 trasformo il <div className= "carta"></div> in 

export default Card