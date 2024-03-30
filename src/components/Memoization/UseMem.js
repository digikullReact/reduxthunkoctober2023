import React,{useMemo, useState} from 'react'

// use of useMemo hook // it memoized
const UseMem = () => {

    const [heavy,setHeavy]=useState(false);
    const [state,setState]=useState(false)
    const [list,setList]=useState([1,2,3,4,4,4,5,9,90,78,9000,45])
/*
    const cachedValue = useMemo(()=>{
      console.log("processing list")

      return list.map(ele=>ele*5);
    }, [list])
    */

    const cachedValue= ()=>{
        console.log("processing list")
  
        return list.map(ele=>ele*5);
      }

    const handleClick=()=>{
        console.log("state changed");

       setState(!state);
        //setList([2,378,90,122]);

    }

  return (
    <div>
        <ul className="list-group">
        {
            cachedValue().map((ele,i)=>(
                <li key={i} className="list-group-item">{ele}</li>
            ))
        }

        <button className='btn btn-info' onClick={handleClick}>
            Change State
        </button>

</ul>
       


    </div>
  )
}

export default UseMem