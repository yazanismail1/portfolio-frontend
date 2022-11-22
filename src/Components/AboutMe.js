import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "../Styles/AboutMe.css";



class AboutMe extends React.Component{
  constructor(props){
    super(props);
    this.state={
      className: "hidden"
    }
    document.addEventListener("mouseover", this.handleHover, true);
  }

  handleHover = (e) => {
    this.setState({
      className: "hidden-grid-box three"
    })
  }

    
  render(){
    return(
        <>
          <Header />
          <div className='grid-wrapper'>

            <div className='grid-box one'>
              <div className='inner-grid-box'>
                <img className='box-img-me' src={require("../img/MeAvatar.png")} />
              </div>
              <div className='hidden-grid-box three'>
                <h1>about me...</h1>
              </div>
            </div>

            <div className='grid-box two'>
              <div className='inner-grid-box'>
                <img className='box-img' src={require("../img/confused.png")} />
              </div>
              <div className='hidden-grid-box three'>
                <h1>Hello, this is Yaz!</h1>
                <h4>I'm a <strong>Software Developer</strong>...</h4>
              </div>
            </div>

            <div className='grid-box one four'>
              <div className='inner-grid-box'>
                <img className='box-img' src={require("../img/user-profile.png")} />
              </div>
              <div className='hidden-grid-box three'>
                <h4>As a young boy, I spent most of my time in front of my computer screen, building simple apps using Visual Basic that meant the world. Years passed by, I decided to finally peruse what I want, reviving that dusty dream and passion. </h4>
              </div>
            </div>

            <div className='grid-box two five'>
              <div className='inner-grid-box'>
                <img className='box-img' src={require("../img/organization.png")} />
              </div>
              <div className='hidden-grid-box three'>
                <a href= "https://docs.google.com/document/d/1GLvQnfT-UBWejEPTtOV1pisAZTkOh5S7QIAv_9t09kU/edit?usp=sharing" target="_blank">Résumé</a>
              </div>
            </div>

            <div className='grid-box one'>
              <div className='inner-grid-box'>
                <img className='box-img' src={require("../img/idea.png")} />
              </div>
              <div className='hidden-grid-box three'>
                <h4>I'm currenty working on writing a <strong>blog</strong> to guide people and tell the story of my career shift.</h4>
              </div>
            </div>

            <div className='grid-box two'>
              <div className='inner-grid-box'>
                <img className='box-img' src={require("../img/community.png")} />
              </div>
              <div className='hidden-grid-box three'>
                <h4>Hello it's me! I was wondering if after all these scrolls you would like to reach...</h4>
                <div className='contactme-grid'>
                  <a href="https://github.com/yazanismail1" target="_blank"><img src={require("../img/github.png")} alt="gitHub" title="gitHub"/></a>
                  <a href="https://www.linkedin.com/in/yazan-alfarra/" target="_blank"><img src={require("../img/linkedin.png")} alt="linkedIn" title="linkedIn"/></a>
                  <a href="https://wa.me/962775818618" target="_blank"><img src={require("../img/whatsapp.png")} alt="whatsApp" title="whatsApp"/></a>
                </div>

              </div>
            </div>
          </div>
        </>
    )
  }
}

export default AboutMe;
