import React from "react";
import "../Styles/FirstPage.css";
import InfoModal from "./InfoModal";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

class FirstPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show: false,
    }
  }

  handleOpen = () => {
    this.setState({
      show:true,
    })
  }

  handleClose = () => {
    this.setState({
      show:false,
    })
  }


  render() {
    return (
          <div  className="fullScreen"  >
            <div className="background"></div>
          <div className="img">
            <img src={require("../img/MeAvatar.png")} alt="Avatar" title="Almost Yazan Alfarra"/>
          </div>

          <div className="selfIntro">
            <h2>Welcome</h2>
            <p>From Civil Engineer to Software Engineer, this is <strong id="name">Yazan Alfarra</strong> a <strong id="job">Fullstack</strong> developer recently graduated from Code Fellows Bootcamp with passion towards <em>data</em> and <em>web</em>.</p> 
            <p>I hope you have access to a keyboard so we can have fun ༼ つ ◕ᴗ◕ ༽つ .</p>
            
          </div>
          <div className="Scribble">
            <img src={require("../img/scribble.png")} alt="Scribble" title="Scribble"/>
            {/* <a to="/contactMe"><button className="getInTouchButton" >Get in touch</button></a> */}
            <Nav.Link ><Link className="getInTouchButton"  to="/contactMe">Get in touch</Link></Nav.Link>
          </div>
          
          <div id="On" className="handbook">
          <button className="handbook" onClick={this.handleOpen}><img className="handbook" src={require("../img/handbook.png")} alt="handbook" title="handbook"/>
            </button>
          </div>
          <div id="SOCIAL" className="socialInfo">
            <a href="https://github.com/yazanismail1" target="_blank"><img className="socialIcons" src={require("../img/github.png")} alt="gitHub" title="gitHub"/></a>
            <a href="https://www.linkedin.com/in/yazan-alfarra/" target="_blank"><img className="socialIcons" src={require("../img/linkedin.png")} alt="linkedIn" title="linkedIn"/></a>
            <a href="https://wa.me/962775818618" target="_blank"><img className="socialIcons" src={require("../img/whatsapp.png")} alt="whatsApp" title="whatsApp"/></a>
            <div className="verticalLine"></div>
          </div>
          <InfoModal 
          show={this.state.show}
          close={this.handleClose}
          />
          
          </div>
    );
  }
}

export default FirstPage;
