import { useState } from 'react'


const App = () => {
  const [goodClick, setGood] = useState({good : 0})
  const [neutralClick, setNeutral] = useState({neutral : 0})
  const [badClick, setBad] = useState({bad : 0})

  const handleGoodClick = () => {
    const newGood = { ...goodClick, good: goodClick.good + 1 }
    setGood(newGood)
  }
  
  const handleNeutralClick = () => {
    const newNeutral = { ...neutralClick, neutral: neutralClick.neutral + 1 }
    setNeutral(newNeutral)
  }

  const handleBadClick = () => {
    const newBad = { ...badClick, bad: badClick.bad + 1 }
    setBad(newBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {goodClick.good}</p>
      <p>neutral {neutralClick.neutral}</p>
      <p>bad {badClick.bad}</p>
    </div>
  )
}

export default App
