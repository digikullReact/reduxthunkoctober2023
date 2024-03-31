import React ,{useState,useCallback} from 'react'
import SideBar from './SideBar'


// i just want to get ne string everytime
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const Home = () => {
    const [state,setState]=useState("");
    const [childState,setChildState]=useState("");

    const handleClick=()=>{
        setState(makeid(10))

    }

    const rerenderChild=()=>{
        setChildState(makeid(10))
    }

    // When the home  component rerenders the increment function is re created and a 
    // new reference of the function is formed 
    // which is passed as props
    const increment=()=>{
        console.log("datatatat");
    }
// the useCallback hook will memoize the increment function  such that its reference is kept constant
// even if the Home component re renders 
    const cachedFn = useCallback(increment, [])
  return (
    <div>
    <h1>I am Home Components {state} </h1>
    <SideBar childState={childState} increment={cachedFn} />

    <button  className='btn btn-info' onClick={handleClick}>
        Change State
    </button>

    <button className='btn btn-info' onClick={rerenderChild}>
        Now this will re render the child Side bar component
    </button>
    
    </div>
  )
}

export default Home