
import { useState } from 'react'
import './App.css'
import QuoteBox from './Components/QuoteBox';
import quotes from "./data/quotes.json"
import colors from "./data/colors.json"

function App() {


  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const [quoteRamdon, setquoteRamdon] = useState(random(quotes));
  const [colorRamdon, setcolorRamdon] = useState(random(colors));

  const handleClick = () => {
    setcolorRamdon(random(colors));
    setquoteRamdon(random(quotes));
  }

  //sale doble por el stric mode
  return (
    <div className="App" style={{backgroundColor: colorRamdon}}>
      <QuoteBox randomQuote={quoteRamdon} handleClick={handleClick} randomColor={colorRamdon}/>
    </div>
  )
}

export default App
