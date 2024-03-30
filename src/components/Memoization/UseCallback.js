import React,{useCallback, useState} from 'react'

const UseCallback = () => {
    const [state,setState]=useState(0);

    const increment=()=>{
        setState(state+1);
    }
}

export default UseCallback