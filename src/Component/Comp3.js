import React, { useReducer } from 'react'

const initialState = {
    counter: 0,
    
}

function reducer(state, action){
    if(action.type === "increase"){
        return{
            counter: state.counter+ 1,
        }
    }

    else{
        return{
            counter: state.counter + action.payload,
        }
    }
}

export default function Comp3() {
    // const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log("hello", state, dispatch)
  return (
    <div>
      <p>Counter: {state.counter}</p>
      <button onClick={()=> dispatch({
        type: "increase", 
      })}>Increase</button>

      <button onClick={()=> dispatch({
        type: "increaseByValue",
        payload: 2, 
      })}>Increase by 2 </button>
    </div>
  )
}
