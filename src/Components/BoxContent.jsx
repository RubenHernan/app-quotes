import React from 'react'

const BoxContent = ({randomQuote,handleClick,randomColor}) => {
    return (
        <div className='box__content'>
            <p className='box__text'>{randomQuote.quote}</p>
            <h1 className='box__title'>{randomQuote.author}</h1>
            <button style={{ backgroundColor: randomColor }} className='box__btn' onClick={handleClick}>&#62;</button>
        </div>
    )
}

export default BoxContent