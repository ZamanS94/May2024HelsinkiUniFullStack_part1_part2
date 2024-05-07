import React from 'react'

const Notification = ({ message }) => {
  return (
    message === null ? null :
    <div style={{ color: 'green', 
                background: 'lightgrey', 
                fontSize: '20px', 
                borderStyle: 'solid',
                borderRadius: '5px',
                padding: '10px', 
                marginBottom: '10px' }}>
    {message}
    </div>
  )
}

export default Notification