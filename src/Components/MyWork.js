import React from 'react';
import NavigationModal from "./NavigationModal";
import "../Styles/MyWork.css";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Footer from './Footer';



class MyWork extends React.Component{
    
  render(){
    return(
      <>
      <Header />
      <div className='OutterWrapper'>

        <div className='cards'>
        <img className='cardImg' src={require("../img/home.jpg")}/>
        <h3>Web Development | Bookem</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque id nunc eu imperdiet. Proin fringilla nisi nec nibh malesuada eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <a href="#">Code</a>
        <a href="#">Deployed Site</a>
        </div>

        <div className='cards'>
        <img className='cardImg' src={require("../img/home.jpg")}/>
        <h3>Web Development | Portfolio</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque id nunc eu imperdiet. Proin fringilla nisi nec nibh malesuada eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <a href="#">Code</a>
        <a href="#">Deployed Site</a>
        </div>

        <div className='cards'>
        <img className='cardImg' src={require("../img/home.jpg")}/>
        <h3>Deep Learning | bAIrd</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque id nunc eu imperdiet. Proin fringilla nisi nec nibh malesuada eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <a href="#">Code</a>
        <a href="#">Deployed Site</a>
        </div>

        <div className='cards'>
        <img className='cardImg' src={require("../img/home.jpg")}/>
        <h3>Data Science | Space Race</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque id nunc eu imperdiet. Proin fringilla nisi nec nibh malesuada eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <a href="#">Code</a>
        <a href="#">Deployed Site</a>
        </div>

        <div className='cards'>
        <img className='cardImg' src={require("../img/home.jpg")}/>
        <h3>Web Scrapping | Tweeting Bot</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque id nunc eu imperdiet. Proin fringilla nisi nec nibh malesuada eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <a href="#">Code</a>
        <a href="#">Deployed Site</a>
        </div>

        <div className='cards'>
        <img className='cardImg' src={require("../img/home.jpg")}/>
        <h3>Scripts | Tic Tac Toe</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque id nunc eu imperdiet. Proin fringilla nisi nec nibh malesuada eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <a href="#">Code</a>
        <a href="#">Deployed Site</a>
        </div>



        </div>
        </>
    )
  }
}

export default MyWork;
