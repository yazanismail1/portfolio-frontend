import React from "react";
import "../Styles/NavigationBox.css";
import NavigationModal from "./NavigationModal";

class NavigationBox extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showNavigationModal:false,
    }
    document.addEventListener("keydown", this.handleClick, true);
  }

  handleClick = (e) => {
    if(e.key === "a" || e.key === "A") {
        this.setState({
          showNavigationModal:true,
        })
        console.log(e.key)
    } else if (e.key === "d" || e.key === "D") {
        this.setState({
          showNavigationModal:false,

        })
        console.log(e.key)
    }
}

  render() {
    return (
      <div   id={this.props.navigationVisibility}>
        <div> 
        <div className="wrapper">
            <div id="afterZoomOut">
          <div className="cube">
            <div className="HomePage">
              <h3>Home Page</h3>
              <p>🏡</p>
            </div>
            <div className="AboutMe">
              <h3>About Me</h3>
              <p>👁‍🗨</p>
            </div>
            <div className="MyWork">
              <h3>My Work</h3>
              <p>💻</p>
            </div>
            <div className="ContactMe">
              <h3>Contact Me</h3>
              <p>📞</p>
            </div>
            <div className="ceiling"></div>
            <div className="bottomFloor"></div>
          </div>
        </div>
        <div className="floor"></div>
      </div>
      </div>

      <NavigationModal 
      show={this.state.showNavigationModal}
      />
      </div>
    );
  }
}
export default NavigationBox;
