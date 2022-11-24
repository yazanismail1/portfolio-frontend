import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../Styles/Blog.css'




class Blog extends React.Component{
    
  render(){
    return(
        <>
          <Header />
          <div className='blog-wrapper'>
            <h1>BLOGS YET TO PUBLISH!</h1>
            <img src={require("../img/speech-bubble.gif")}/>
          </div>

        </>
    )
  }
}

export default Blog;
