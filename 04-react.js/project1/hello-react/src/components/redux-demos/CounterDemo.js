import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementIfNotMax } from './action'

export default function CounterDemo() {
    const count = useSelector(state => state.count) // 0
    const dispatch = useDispatch();
  return (
    <div>
        <h3>Counter Demo</h3>
        <button onClick={() =>dispatch(decrement())}> - </button>  &nbsp;&nbsp;
        {count} &nbsp; &nbsp;
        <button onClick={() =>dispatch(incrementIfNotMax())}> + </button>
    </div>
  )
}
