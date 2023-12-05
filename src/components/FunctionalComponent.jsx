import React, { useState } from 'react'

const FunctionalComponent = (props) => {
    const [value, setValue] = useState(0)
    
    const handleMin = () => {
        if(value > 0) {
            setValue(value - 1)

        }
    }
    const handlePlus = () => {
        setValue(value + 1)

    }

  return (
    <div>
        <h1>Ini Functional Components</h1>
        <h1>Perkenalkan ini {props.name}</h1>
        <button onClick={handleMin}>-</button>
        <span>{' '}{value}{' '}</span>
        <button onClick={handlePlus}>+</button>
    </div>
  )
}

export default FunctionalComponent