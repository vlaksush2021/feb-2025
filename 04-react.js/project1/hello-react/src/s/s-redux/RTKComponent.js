// // redux toolkit 

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './rtk-reducer';

export default function RTKComponent() {

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