import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../Styles/Header.css'



class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
          border:""
        }
        window.addEventListener('scroll', this.handleScroll);
      }

      handleScroll = () => {
        if(window.scrollY >= 100){
          this.setState({
            border:"boarderYes"
          })
          console.log(this.state.backgroundColor)
        }else{
          this.setState({
            border:""
          })
        }
    
      }
    
    render() {
      return (
<Navbar id="navigation1" className="boarderYes" sticky="top" collapseOnSelect expand="lg">
<Container>
  <Navbar.Brand ><Link id="logo" style={{ textDecoration: 'none'}} to="/">Y | A</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ml-auto justify-content-end" id="items" style={{ width: "100%" }}>
    <Nav.Link ><Link id="navitems1" to="/">Home</Link></Nav.Link>
    <Nav.Link ><Link id="navitems1" to="/aboutMe">About Me</Link></Nav.Link>
    <Nav.Link ><Link id="navitems1" to="/myWork">My Work</Link></Nav.Link>
    <Nav.Link ><Link id="navitems1" to="/blog">Blog</Link></Nav.Link>
    <Nav.Link ><Link id="navitems1" to="/contactMe">Contact Me</Link></Nav.Link>
  </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>
        )
    }
  }
  
export default Header;
