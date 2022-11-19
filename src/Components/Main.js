import React from "react";
import FirstPage from "./FirstPage";
import NavigationBox from "./NavigationBox";
import NavigationModal from "./NavigationModal";


class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showNavigationModal:false
        }
        document.addEventListener("keydown", this.handleClick, true);
        document.addEventListener("click", this.close, true);
    }

    shownavigation = () => {
      this.setState({
        showNavigationModal:true
      })
    }

    // close = () => {
    //   this.setState({
    //     showNavigationModal:false
    //   })
    // }

    handleClick = (e) => {
        if(e.key === "s" || e.key === "S") {
            this.setState({
                showNavigationModal:true
            })
            console.log(e.key)
        } else {
            this.setState({
                showNavigationModal:false

            })
            console.log(e.key)
        }
    }

    

  render() {
    return (
      <>
        <FirstPage />

        <NavigationModal 
      show={this.state.showNavigationModal}
      />
      <a href="#" onClick={this.shownavigation} style={{position:"absolute", top:"0", left:"0", width:"75px", height:"75px"}}></a>
      </>
    );
  }
}
export default Main;
