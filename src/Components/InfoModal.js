import React from "react";
import "../Styles/InfoModal.css";
import Modal from 'react-bootstrap/Modal';

class InfoModal extends React.Component {
  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header  closeButton>
          <Modal.Title id="ModalHeader">Explore More Guide</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ModalBody">It's quite simple, all you need is a couple keys <img className="navigationKeys" src={require("../img/keyboard-key.png")} alt="handbook" title="handbook"/> .<br></br> S-key is to view the navigation pannel.<br></br> W-key is to close the navigation pannel.<br></br>Click on a desired page using your mouse.  
        
        </Modal.Body>
      </Modal>
    );
  }
}

export default InfoModal;
