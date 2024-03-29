import React,{useEffect, useState} from 'react'
import { listRestaurants,deleteRestaurant } from '../thunks/restauranthunk'
import { useDispatch,useSelector } from 'react-redux'
import Pagination from './Pagination';


const List = () => {
  const dispatch=useDispatch();
  const restaurantsList=useSelector(state=>state.restaurantReducer.list)
  const total=useSelector(state=>state.restaurantReducer.totalRecords)
  const [deleted,setisDeleted]=useState(false);

useEffect(()=>{

  dispatch(listRestaurants());
  // here we will call the api

},[deleted])
const clickHandler=(pageNumber)=>{
  dispatch(listRestaurants(pageNumber));

}

const deleteHandler=(id)=>{
  dispatch( deleteRestaurant(id)).then(result=>{
    setisDeleted(!deleted);


  }).catch(err=>{
    console.log(err);
  })

}

  return (
    <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Country</th>
      <th scope="col">CreatedAt</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    {
      restaurantsList.map(ele=>(
        <tr>
        <th scope="row">{ele.id}</th>
        <td>{ele.attributes.name}</td>
        <td>{ele.attributes.city}</td>
        <td>{ele.attributes.state}</td>
        <td>{ele.attributes.country}</td>
        <td>{ele.attributes.createdAt}</td>
        <td><button type="button" class="btn btn-dark" onClick={()=>deleteHandler(ele.id)}>Delete</button></td>
      </tr>

      ))
    }
   
   
  </tbody>
  <Pagination total={total} limit={5} handler={clickHandler}/>
</table>
    
  )
}

export default List