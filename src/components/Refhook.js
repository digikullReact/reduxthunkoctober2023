import React,{useRef,useState,useEffect} from 'react'

const Refhook = () => {
    const [state,setState]=useState(0);
    const [renderCount,setRenderCount]=useState(0);


    const handleClick=()=>{
        setState(state+1);
    }

    // useRef maintains it data even after re renders 
    const refCount=useRef(0);

    // component did update
    useEffect(()=>{
     
        // here we can count the re renders
       console.log("component rerendered")
       refCount.current=refCount.current+1
      //setRenderCount(renderCount+1);  // it will lead to infinite loop
    })
    
    // one variation select the dom elements and change their property directly
    // useRef doesnt change its value even after rerender
  return (
    <div>Refhook
        {state}

        <h1>Re renders {refCount.current}</h1>
        
        <button onClick={handleClick} className='btn btn-info'>
            Change State
        </button>
    </div>
  )
}

export default Refhook