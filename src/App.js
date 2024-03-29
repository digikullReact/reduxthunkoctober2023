import logo from './logo.svg';
import './App.css';
import Restaurant from './components/Restaurant';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="container">
      <Navbar/>
      <div className='row'>
        <div className='col-md-6 offset-3'>
        <Outlet />
        </div>

      </div>
     
    </div>
  );
}

export default App;
