import React, {useRef} from 'react';
import Header from './Header';
import "../Styles/ContactMe.css";
import emailjs from '@emailjs/browser';
import swal from "sweetalert";


export const ContactMe = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_25zzwds", "template_binzxy8", form.current, "8NXhqFjUdTkZ_T9Ht")
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

  e.target.reset();
      swal({
        title: "Email was sent successfully ! ",
        icon: "success",
        button: "Continue",
        className: "swalButton"
      });
  }
    
    return(
      <>
      <Header />
      <div className='contactPage'>
      <form className='contactForm' ref = {form} onSubmit={handleSubmit}>
      <label>E-mail</label><br></br>
      <input type="email" id="email" name="email" ></input><br></br>
      <label>Subject</label><br></br>
      <input type="text" id="subject" name="subject" ></input><br></br>
      <label>Message</label><br></br>
      <textarea rows="5" cols="50" name="message"></textarea><br></br>
      <input type='submit' value="Send"></input>
      </form>
    </div>
    </>
    )

}

export default ContactMe;
