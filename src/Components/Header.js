import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../Styles/Header.css'



class Header extends React.Component {
    
    render() {
      return (
<Navbar id="navigations">
  <Navbar.Brand >
    <Link className="navitems home" to="/"><img title="Home Page" src={require("../img/homepage.png")}/></Link>
  </Navbar.Brand>

  <Nav id="items">
    <Nav.Link ><Link className="navitems aboutMe" to="/aboutMe"><img title="About Me" src={require("../img/user.png")}/></Link></Nav.Link>

    <Nav.Link ><Link className="navitems" to="/myWork"><img title="My Work" src={require("../img/layer.png")}/></Link></Nav.Link>
    
    <Nav.Link ><Link className="navitems" to="/blog"><img title="Blog" src={require("../img/blogger.png")}/></Link></Nav.Link>
    
    <Nav.Link ><Link className="navitems contactMe" to="/contactMe"><img title="Contact Me" src={require("../img/user (1).png")}/></Link></Nav.Link>
  </Nav>
</Navbar>
        )
    }
  }
  
export default Header;
