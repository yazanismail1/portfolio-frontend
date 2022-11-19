import React from 'react';
import Header from './Header';
import "../Styles/ContactMe.css";

class ContactMe extends React.Component{
    
  render(){
    return(
      <>
      <Header />
      <div className='contactPage'>
      <form className='contactForm'>
      <label>E-mail</label><br></br>
      <input type="text" id="fname" name="fname" ></input><br></br>
      <label>Subject</label><br></br>
      <input type="text" id="fname" name="fname" ></input><br></br>
      <label>Message</label><br></br>
      <textarea rows="5" cols="50"></textarea><br></br>
      <input type='submit'></input>
      </form>
    </div>
    </>
    )
  }
}

export default ContactMe;
