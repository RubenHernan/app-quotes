import React from 'react'
import BoxContent from './BoxContent'

const QuoteBox = ({ randomQuote, handleClick,randomColor }) => {

  //console.log(randomQuote)

  return (
    <article style={{color: randomColor}} className='box__quote'>
      <i className='bx bxs-quote-left box__icon'></i>
      <BoxContent randomQuote={randomQuote} handleClick={handleClick} randomColor={randomColor}/>
    </article>
  )
}

export default QuoteBox