import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
//checked 
class Navigation extends React.Component{

        render()
        {
        return(
            <Navbar bg="light" expand="lg">
              <Link to ={""} className="navbar-brand">
              <img src="favicon.ico" width="45" height="45" alt="brand"/>Live Video Recognition Attendance System
              </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link to ={"welcome"} className="nav-link">Home</Link>

      <Link to ={"attendance"} className="nav-link">Take Attendance</Link>
      <Link to ={"add"} className="nav-link">Submitteachersdata</Link>
      <Link to ={"teacher_teaches"} className="nav-link">teacher_teaches</Link>
      <Link to ={"register_student"} className="nav-link">register_student</Link>

    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        );
    } 
            
        
    
}
export default Navigation