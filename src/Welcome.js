import {Container,Row,Jumbotron,Button,Col } from 'react-bootstrap';

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl} from 'react-bootstrap';
class Welcome extends React.Component{

        render()
        {
        return(
<Jumbotron>

  <h1>Live Video Recognition Attendance System</h1>
  <p></p>
  <p>•	This project is to make process of attendance very faster and accurate based on face recognition system with no room to proxy attendance</p>
  <p>•	System will record & identify live students through camera & make their attendance</p>
  <p>•	This attendance will be present on website and can be downloaded. Attendance marking can only be done from teachers account & students can download or view attendance from websit.</p>
  
</Jumbotron>);
    } 
            
    
}
export default Welcome