// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Routes, Route,useLocation,Navigate } from 'react-router-dom';
import SideNav from './components/Side-nav';
import ListCars from './components/ListCars';
import Dashboard from './components/Chart-Bar';
import AddCar from './components/AddCar';
import EditCar from './components/EditCar';
import Login from './components/Login';
// import Dashboard from './components/Chart-Bar';

const App = () => {
  const location = useLocation();
  let user = null;
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  // console.log(user.access_token);
  // console.log(localStorage.getItem('user'));
  return (
    <div className="App">
     <>
     {location.pathname !== '/login' &&  <SideNav/>}  
      <Routes>
        <Route exact  path='/' element={ user ? <Dashboard user={user?.access_token} /> : <Navigate to="/login" replace />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/listCar' element={<ListCars user={user?.access_token}/>}/>
        <Route path='/addNewCar' element={<AddCar user={user?.access_token}/>}/>
        <Route path='/editCar/:CarsId' element={<EditCar/>}/>
      </Routes>
     </>
     
    </div>
  );
}

export default App;
