import React,{useRef} from 'react'

const Refhook2 = () => {
    const inputref=useRef(null);

    const focusElemnt=()=>{
        // you can access native dom properteiss with the help of use Ref as well
       // inputref.current.focus();
        inputref.current.style.backgroundColor="green";  // real dom element

    }
  return (
    <div>



        <input type='text' ref={inputref}/>
        <button className='btn btn-info' onClick={focusElemnt}>
            FocusElement

        </button>
    </div>
  )
}

export default Refhook2