import { useState } from 'react'


const App = () => {
  const [goodClick, setGood] = useState({good : 0})
  const [neutralClick, setNeutral] = useState({neutral : 0})
  const [badClick, setBad] = useState({bad : 0})
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const newGood = { ...goodClick, good: goodClick.good + 1 }
    setGood(newGood)
    setTotal(newGood.good + neutralClick.neutral + badClick.bad )
  }

  const handleNeutralClick = () => {
    const newNeutral = { ...neutralClick, neutral: neutralClick.neutral + 1 }
    setNeutral(newNeutral)
    setTotal(newNeutral.neutral + goodClick.good + badClick.bad )
  }

  const handleBadClick = () => {
    const newBad = { ...badClick, bad: badClick.bad + 1 }
    setBad(newBad)
    setTotal(newBad.bad + neutralClick.neutral + goodClick.good )
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
      <p>all {total}</p>
      <p>average {(goodClick.good-badClick.bad)/total}</p>
      <p>positive {goodClick.good/total*100}%</p>
    </div>
  )
}

export default App
