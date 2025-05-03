import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incrementIfNotMax } from './action';

export default function Counter() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(decrement())}> - </button>
            <span>  {count} </span>
            <button onClick={() => dispatch(incrementIfNotMax())}> + </button>
   
            </div>
    )
}
