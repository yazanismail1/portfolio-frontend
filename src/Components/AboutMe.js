import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "../Styles/AboutMe.css";



class AboutMe extends React.Component{
    
  render(){
    return(
        <>
          <Header />
          <div className='AboutWrapper'>
            <div className='box one hiddenLayer'>
              <img className='aboutMeAvatar' src={require("../img/MeAvatar.png")} />
              <div className='hoverLayer'>
                <h1 className='yaz'>Hello, this is Yaz!</h1><br></br>
              </div>
            </div>
            <div className='box two hiddenLayer'>
            <img className='moreabout' src={require("../img/confused.png")} />
              <div className='hoverLayer'>
                <h4>I'm a <strong>Software Developer</strong> with interest in both web and data...</h4>

              </div>
            </div>
            <div className='box one three hiddenLayer'>
            <img className='ideaabout' src={require("../img/user-profile.png")} />
              <div className='hoverLayer'>
                <h4 className='briefAboutMe'>As a young boy, I spent most of my time in front of my computer screen, building simple apps using Visual Basic that meant the world. Years passed by, I decided to finally peruse what I want, reviving that dusty dream and passion. </h4>
              </div>
            </div>
            <div className='box two four hiddenLayer'>
            <img className='edu' src={require("../img/organization.png")} />
              <div className='hoverLayer'>
              <a className='resume' href= "https://docs.google.com/document/d/1GLvQnfT-UBWejEPTtOV1pisAZTkOh5S7QIAv_9t09kU/edit?usp=sharing" target="_blank">Résumé</a>
              </div>
            </div>
            <div className='box one hiddenLayer'>
            <img className='ideaabout' src={require("../img/idea.png")} />
              <div className='hoverLayer'>
                <h4>I'm currenty working on writing a <strong>blog</strong> to guide people and tell the story of my career shift.</h4>
              </div>
            </div>
            <div className='box two hiddenLayer'>
              <img className='contactAbout' src={require("../img/community.png")} />
              <div className='hoverLayer'>
                <div className='insideGrid'>
                <h4>Hello it's me! I was wondering if after all these scrolls you would like to reach...</h4>
                <div className='iconz'>
                <a href="https://github.com/yazanismail1" target="_blank"><img className="contacticonz" src={require("../img/github.png")} alt="gitHub" title="gitHub"/></a>
            <a href="https://www.linkedin.com/in/yazan-alfarra/" target="_blank"><img className="contacticonz" src={require("../img/linkedin.png")} alt="linkedIn" title="linkedIn"/></a>
            <a href="https://wa.me/962775818618" target="_blank"><img className="contacticonz" src={require("../img/whatsapp.png")} alt="whatsApp" title="whatsApp"/></a>
                </div>
                </div>



              </div>
            </div>
          </div>


        </>
    )
  }
}

export default AboutMe;
