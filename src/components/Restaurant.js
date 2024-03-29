import React ,{useState} from 'react'
import {createRestaurants} from "../thunks/restauranthunk";
import { useDispatch } from 'react-redux';
import Alert from './Alert';

const Restaurant = () => {
  const dispatch=  useDispatch()
  const [alertType,setAlertType]=useState()
    const [state,setState]=useState({
        name:"",
        city:"",
        country:"",
        state:""
    })

    const handleChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value});

    }

    const handleClick=()=>{
        dispatch(createRestaurants(state)).then(result=>{
          setAlertType({type:"alert-primary",message:"Restaurant Created SuccessFully"})
          setState({
            name:"",
            city:"",
            country:"",
            state:""
        })

          setTimeout(()=>{
            setAlertType(undefined)

          },2000)
      

        }).catch(err=>{
          console.log(err);
        })

    }
  return (
    <div >
      <h2>Publish Your Restaurant</h2>
      {
        alertType? <Alert type={alertType}/>:""
      }
     
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label"> Name</label>
              <input type="text" className="form-control"  value={state.name} name='name' onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">City</label>
              <input type="text" className="form-control" value={state.city} name='city' onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">State</label>
              <input type="text" className="form-control"  value={state.state} name='state' onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Country</label>
              <input type="tel" className="form-control" value={state.country} name='country' onChange={handleChange} />
            </div>
          </div>
        </div>
        <button type="button" onClick={handleClick} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Restaurant