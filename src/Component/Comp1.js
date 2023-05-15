import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/appSlice'
import Comp2 from './Comp2'

const Comp1 = () => {
    const counter = useSelector(state => state.app.counter)
    
    const dispatch= useDispatch();
  return ( 
    <div>
      <button onClick={()=> dispatch(increment())}>Plus </button>
      <button onClick={()=> dispatch(decrement())}>Minus</button>
      
      <Comp2/>
    <p> This is the number you want {counter}</p>
    </div>
  )
}

export default Comp1
