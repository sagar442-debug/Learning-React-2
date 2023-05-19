import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { changeName } from '../redux/appSlice'
import AppContext from '../context/AppContext'

const Comp2 = () => {
    const name = useSelector(state => state.app.name)
    
    const dispatch = useDispatch();
    const data = useContext(AppContext)
   
  return (
    <div>
      <p>hello {data.name}</p>
    </div>
        
    
  )
}

export default Comp2
