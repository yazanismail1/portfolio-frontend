import React from "react";
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import "../Styles/NavigationModal.css";

class NavigationModal extends React.Component {
    
    render() {
        return (
            <Modal
            size="xl"
            show={this.props.show}
        dialogClassName="modal-90w change-style"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        
        
      >
        <Modal.Body id="navigation" >
        <Navbar collapseOnSelect expand="xl">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto justify-content-center Tabs " style={{ width: "100%" }}>








                <Nav.Link id="navitems"><Link  style={{ textDecoration: 'none', }} to="/">
            <strong className="titleTab">Home Page | 🏡</strong>
                <img className="navigationTabsImg" src={require("../img/home.jpg")} alt="Home" />
                </Link></Nav.Link>

                <Nav.Link id="navitems"><Link  style={{ textDecoration: 'none', }} to="/aboutMe">
            <strong className="titleTab">About Me | 👁‍🗨</strong>
                <img className="navigationTabsImg" src={require("../img/home.jpg")} alt="About Me" />
                </Link></Nav.Link>

                <Nav.Link id="navitems"><Link  style={{ textDecoration: 'none', }} to="/myWork">
            <strong className="titleTab">My Work | 💻</strong>
                <img className="navigationTabsImg" src={require("../img/home.jpg")} alt="My Work" />
                </Link></Nav.Link>

                <Nav.Link id="navitems"><Link  style={{ textDecoration: 'none', }} to="/blog">
            <strong className="titleTab">Blog | ✒</strong>
                <img className="navigationTabsImg" src={require("../img/home.jpg")} alt="blog" />
                </Link></Nav.Link>

                <Nav.Link id="navitems"><Link style={{ textDecoration: 'none', }} to="/contactMe">
            <strong className="titleTab">Contact Me | 📞</strong>
                <img className="navigationTabsImg" src={require("../img/contactmepage.jpg")} alt="Contact Me" />
                </Link></Nav.Link>

            
          </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
        </Modal.Body>
      </Modal>



            
        )
    }
}

export default NavigationModal;
