import React,{useEffect,memo} from 'react'

const Child =({data}) => {
    console.log(" Child Component is re rendering")
/*
    // mounting phase
    useEffect(()=>{
       console.log("Child Component re rendered")
    },[])

    useEffect(()=>{
        console.log("Child Component  again re rendered")

    })
    */
    
  return (
    <div>

        <h1>Child Component  </h1>
    </div>
  )
}

export default  memo(Child)