import React, { useContext } from 'react'
import NameContext from './NameContext'

export default function C() {
    const {orgName} = useContext(NameContext);
  return (
    <div>
        <h2>C Component - {orgName}</h2>
        <hr />
    </div>
  )
}
