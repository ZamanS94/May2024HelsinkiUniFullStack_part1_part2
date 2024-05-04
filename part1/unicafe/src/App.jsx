import { useState } from 'react'

const Statistics = ({good,neutral,bad,total}) => {
    if (total === 0) {
      return <p>No feedback given</p>
    }
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good-bad)/total}</p>
      <p>positive {good/total*100}%</p>
    </div>
  )
}

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
      <Statistics good={goodClick.good} bad={badClick.bad} neutral={neutralClick.neutral} total={total} />
    </div>
  )
}

export default App
