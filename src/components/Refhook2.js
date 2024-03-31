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
/**
 * 
 * 
 * 
 * Problem Statement:
 *  Create a simple todo list application using React. 
 * The application should allow users to add new tasks, 
 * mark tasks as completed, and delete tasks. Additionally, i
 * mplement a feature that displays the total number of tasks remaining. 
 * Use the useRef hook to focus the input field after adding a new task.
 * Requirements:Display an input field and a button to add new tasks.
 * When the user enters a task and clicks the button,
 *  the task should be added to the list of tasks
 * Each task in the list should have a checkbox to mark it as 
 * completed and a delete button to remove it from the list.
 * Display the total number of tasks remaining above the task list.
 * Use the useRef hook to focus the input field automatically after adding a new task
 * .Bonus:Implement local storage functionality to persist tasks even after the page is refreshed.
 * Add validation to prevent users from adding empty tasks.Style the todo
 *  list application to improve its visual appeal
 * .Note: You can use any additional libraries or tools as needed.
 */