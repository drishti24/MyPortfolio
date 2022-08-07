import React from "react";  
import {            
  BrowserRouter as Router, Redirect, Route, Switch,       
} from "react-router-dom";
import Form from "./Components/Form";
import AboutMe from "./Components/AboutMe";
import Homepage from "./Components/Homepage";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

class App extends React.Component{
  render() {
    return(
      
        <Router>
              <div> 
              <div className="ui inverted borderless fixed menu" id="myNav">
                <a href="#homepage" className="item">
                    Home
                </a>
                <a href="#aboutme" className="item">
                    About Me
                </a>
                <a href="#skills" className="item">
                    Skills
                </a>
                <a href="#projects" className="item">
                    Projects
                </a>
                <a href="#getInTouch" className="item">
                    Contact
                </a>
              </div>
                <Route path={"/"} exact>
                  <div id="homepage">
                    <Homepage />
                  </div>

                  <div id="aboutme">
                    <AboutMe />
                  </div>

                  <div id="skills">
                    <Skills />
                  </div>
        
                  <div id ="projects">
                    <Projects />
                  </div>
                
                  <div id="getInTouch">
                    <Form />
                  </div>
                </Route>
              </div>
          </Router> 
             
    )
  }
}

export default App;
