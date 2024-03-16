import React ,{useState} from 'react'
import {createRestaurants} from "../thunks/restauranthunk";
import { useDispatch } from 'react-redux';

const Restaurant = () => {
  const dispatch=  useDispatch()
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
        dispatch(createRestaurants(state))

    }
  return (
    <div className="container">
      <h2>Publish Your Restaurant</h2>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label"> Name</label>
              <input type="text" className="form-control"  name='name' onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">City</label>
              <input type="text" className="form-control" name='city' onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">State</label>
              <input type="text" className="form-control"  name='state' onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Country</label>
              <input type="tel" className="form-control" name='country' onChange={handleChange} />
            </div>
          </div>
        </div>
        <button type="button" onClick={handleClick} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Restaurant