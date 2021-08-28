import '../App.js';
import {
  HashRouter as Router,
  NavLink,
} from "react-router-dom";
//import styled from 'styled-components';
import React from "react";
import styled from 'styled-components';

export default function Sidebar() {

  return (
    <>
      <Router>
        <Navbar className="l-navbar" id="nav-bar">
          <nav className="nav" >
            <div>
              <a href="/" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Todo List</span> </a>
              <div className="nav_list">
                <NavLink to="/register" activeClassName="selected" className="nav_link"> <i className='bx bx-user-plus nav_icon'></i> <span className="nav_name">Register</span> </NavLink>
                <NavLink to="/login" activeClassName="selected" className="nav_link"> <i className='bx bx-log-in nav_icon'></i> <span className="nav_name">Login</span> </NavLink>
                <NavLink to="/users" activeClassName="selected" className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Users</span> </NavLink>
                <NavLink to="/myLists" activeClassName="selected" className="nav_link"> <i className='bx bx-book-content nav_icon'></i> <span className="nav_name">My-lists</span> </NavLink>
              </div>
            </div>
            <NavLink to="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">LogOut</span> </NavLink>
          </nav>
        </Navbar>
      </Router>
    </>
  )
}

const Navbar = styled.div`
  width: 150px;
  
`;
