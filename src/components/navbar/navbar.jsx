import React from 'react';
import { FiLogIn } from "react-icons/fi";
import n from '../../css/navbaar.module.css'
import { FaSearch } from "react-icons/fa"
import { NavLink } from 'react-router-dom';


function NAVBAR() {
  return (
    <div className={n.NavbarHeader}>
        <div className={n.links}>
            <ul>
                <img className={n.Logo} src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" alt="" />
                <NavLink to="/">Home</NavLink>
                <NavLink to="/artis">Artis</NavLink>
                <NavLink to="/top">Top</NavLink>
                <NavLink to="/chats">Chats</NavLink>
            </ul>
        </div>
        <div className={n.SearchBar}>
          <div className={n.Form}>
          <input id='search' name='search' className={n.input} type="text" placeholder='Search Music' />
          <div className={n.ButtonItems}>
          <button className={n.SearchButton}>
           <FaSearch/>
           
 </button>
 <NavLink to="/signup" className={n.log}> 
  <div className={n.Login} style={{ display: 'flex', alignItems: 'center' }}>  
    Login <FiLogIn style={{ marginLeft: '5px' }}/>
  </div>
</NavLink>

          </div>
          
          </div>
        </div>
        
    </div>
  );
}

export default NAVBAR;