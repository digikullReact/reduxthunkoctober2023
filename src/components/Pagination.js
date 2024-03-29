import React, { useState } from 'react'

const Pagination = ({total,limit,handler}) => {
   let elems= Array.from(Array(Math.ceil(total/limit)).keys())
    const [elements,setelement]=useState(elems)
  return (
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    {
        elems.map(ele=>(

    <li className="page-item" onClick={()=>handler(ele+1)}><a className="page-link" href="#">{ele+1}</a></li>
   
   

        ))
    }

  
  </ul>
</nav>
  )
}

export default Pagination