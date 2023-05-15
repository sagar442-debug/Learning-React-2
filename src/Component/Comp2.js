import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../redux/appSlice'

const Comp2 = () => {
    const name = useSelector(state => state.app.name)
    
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=> dispatch(changeName())}> Change Name</button>
      <p>My name is {name}</p>
    </div>
  )
}

export default Comp2
