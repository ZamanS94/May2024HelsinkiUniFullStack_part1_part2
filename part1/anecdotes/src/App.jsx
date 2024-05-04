import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [allVotes, setVote] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => {
    let randValue = Math.floor(Math.random() * (anecdotes.length) )
    setSelected(randValue)
  }

  const handleVote = () => {
    const updatedVote = [...allVotes]
    updatedVote[selected] += 1
    setVote(updatedVote)
  }

  let maxVote = allVotes[0]
  let maxPosition = 0
  for (let i = 1; i < anecdotes.length; i++) {
    if (allVotes[i] > maxVote) {
      maxVote = allVotes[i]
      maxPosition = i
    }
  }

    return (
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {allVotes[selected]} votes</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
        <h1>Anecdotes with most votes</h1>
        <p>{anecdotes[maxPosition]}</p>
        <p>has {maxVote} votes</p>
      </div>
    )
}

export default App