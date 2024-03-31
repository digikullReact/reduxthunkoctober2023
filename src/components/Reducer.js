import React,{useReducer, useState} from 'react'

const reducer=(state,action)=>{
      switch (action) {
        case "increment":
           return { count:state.count+1}
            
            break;

            case "decrement":
                return { count:state.count-1}
      
        default:
            break;
      }


}

const Reducer = () => {
    
    const [state,dispatch]=useReducer(reducer,{count:0})

    const handleIncrement=()=>{
        // here we will dispatch
        dispatch("increment")
    }
  return (
    <div>
        
        <h1> Reducer {state.count} </h1>
    
    
    <button className='btn btn-success' onClick={handleIncrement}>
        Increment
        </button>
     </div>

   
  )
}

export default Reducer