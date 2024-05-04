import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = ({good,neutral,bad,total}) => {
    if (total === 0) {
      return <p>No feedback given</p>
    }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="natural" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={(good - bad) / total}/>
      <StatisticLine text="positive" value={good / total*100}/>
    </div>
  )
}


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

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
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics good={goodClick.good} bad={badClick.bad} neutral={neutralClick.neutral} total={total} />
    </div>
  )
}

export default App
