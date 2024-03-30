import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [state,setState]=useState(false);
    const [data ,setData]=useState("Inital Data from the PArent");

const handleClick=()=>{
    // we will modify the state in here
    if (state){
        setData("modified");
    }
 
    console.log("state changed");
    setState(!state);
}

  return (
    <div>
<button className='btn btn-success' onClick={handleClick}>
    Change the State
</button>

        <Child data={data}/>
    </div>
  )
}

export default Parent