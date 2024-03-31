import React ,{memo} from 'react'

const SideBar =({childState,increment}) => {
    console.log("Sidebar child component re rendered");
  return (
    <div>SideBar {childState}
    
    <button onClick={increment}>
        Hello fn
        </button>
    </div>

   
  )
}

export default memo(SideBar)