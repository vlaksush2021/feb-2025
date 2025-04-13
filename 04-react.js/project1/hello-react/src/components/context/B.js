import React, { useContext } from 'react'
import C from './C'
import NameContext from './NameContext'

export default function B() {
    const {emp,numbers} = useContext(NameContext);

  return (
    <div>
        <h2>B Component - {emp.name}</h2>
        {
            numbers.map(number => <p>{number}</p>)
        }
        <hr />
        <C  />
       
    </div>
  )
}
