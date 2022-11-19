import React from 'react';
import NavigationModal from "./NavigationModal";
import "../Styles/MyWork.css";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Footer from './Footer';



class MyWork extends React.Component{
  constructor(props){
    super(props);
    this.state={
        showNavigationModal:false
    }
    document.addEventListener("keydown", this.handleClick, true);
    document.addEventListener("click", this.close, true);
}

close = () => {
  this.setState({
    showNavigationModal:false
  })
}

handleClick = (e) => {
    if(e.key === "s" || e.key === "S") {
        this.setState({
            showNavigationModal:true
        })
        console.log(e.key)
    } else if(e.key === "w" || e.key === "W") {
        this.setState({
            showNavigationModal:false

        })
        console.log(e.key)
    }
}
    
  render(){
    return(
      <>
      <Header />
     
          
        </>
    )
  }
}

export default MyWork;
