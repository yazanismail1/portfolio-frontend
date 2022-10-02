import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './Components/Main'
import AboutMe from './Components/AboutMe'
import ContactMe from './Components/ContactMe'
import MyWork from './Components/MyWork'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
render() {
  return (
    <Router>
    <Routes>
      <Route 
        exact path="/"
        element={<Main/>}
      >
      </Route>
      <Route 
        exact path="/home"
        element={<Main/>}
      >
      </Route>
      <Route 
        exact path="/aboutMe"
        element={<AboutMe />}
      >
      </Route>
      <Route 
        exact path="/contactMe"
        element={<ContactMe />}
      >
      </Route>
      <Route 
        exact path="/myWork"
        element={<MyWork />}
      >
      </Route>      
    </Routes>
  </Router>
  );
}
}

export default App;
