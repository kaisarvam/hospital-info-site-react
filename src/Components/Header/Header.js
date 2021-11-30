import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useEffect,useState } from 'react';
import useAllContext from '../../Hooks/useAllContext';
import './Header.css';

const Header = () => {
  const [userInfo,setUserInfo] = useState([]);
  const data = useAllContext();
  const {user,LogOut,name} = data[3];
  useEffect(()=>{
setUserInfo(user);
  },[user,data])
  

  return (
 <div className="sticky-top">
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand"  to="#">
      <img src="https://i.ibb.co/bv2Wmpg/medical-removebg-preview.png" alt="" width="50px"/> 
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " activeClassName="nav-active-class" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services/all" activeClassName="nav-active-class" >All Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/about" activeClassName="nav-active-class" >About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/faq"  activeClassName="nav-active-class" >FAQ</NavLink>
        </li>
        
        {
         !userInfo.email &&
            <li className="nav-item">
          <NavLink className="nav-link " to="/login" activeClassName="nav-active-class" ><i class="fas fa-sign-in-alt"></i> Login</NavLink>
        </li>   
        }
         {
          userInfo?.email &&  <li className="nav-item">
          <NavLink className="nav-link " to="#" onClick={LogOut} > <i class="fas fa-sign-out-alt"></i> logout</NavLink>
        </li>
        
        }
        
         <li className="nav-item">
          <NavLink className="nav-link " to="#" >{
          userInfo.displayName? 
         userInfo.displayName?
         `logged as ${userInfo.displayName}`
         : ` `
          :name.length===0?
          ``: `logged as ${name}`
        }</NavLink>
        </li>

        
        
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 </div>
  );
};

export default Header;