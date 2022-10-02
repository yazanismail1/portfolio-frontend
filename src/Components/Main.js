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

    

  render() {
    return (
      <>
        <FirstPage />

        <NavigationModal 
      show={this.state.showNavigationModal}
      />
        </>
    );
  }
}
export default Main;
