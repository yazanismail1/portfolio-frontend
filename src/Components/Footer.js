import React from 'react';
import '../Styles/Footer.css'



class Footer extends React.Component {
    
    render() {
      return (
        <div id="footer">
            <p>All rights reserved | Yazan Alfarra © 2022</p>
            <div id="SOCIALF" className="socialInfoF">
            <a href="https://wa.me/962775818618" target="_blank"><img id="socialIconsF" src={require("../img/whatsapp.png")} alt="whatsApp" title="whatsApp"/></a>
            <a href="https://www.linkedin.com/in/yazan-alfarra/" target="_blank"><img id="socialIconsF" src={require("../img/linkedin.png")} alt="linkedIn" title="linkedIn"/></a>
            <a href="https://github.com/yazanismail1" target="_blank"><img id="socialIconsF" src={require("../img/github.png")} alt="gitHub" title="gitHub"/></a>
          </div>
        </div>
        )
    }
  }
  
  export default Footer;
