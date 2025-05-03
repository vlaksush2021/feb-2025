// // redux toolkit 

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './rtkreducer';
export default function RTKCounterDemo() {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}> - </button>
        {count}
      <button onClick={() => dispatch(increment())}> + </button>
    </div>
  )
}