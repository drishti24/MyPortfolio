import React from "react";
import BrickGame from '../BrickGame.png';
import ScientificCalc from '../ScientificCalc.PNG';
import Port from '../port.PNG';
import Game from '../gamestreet.PNG';
import "../css/Projects.css";

class Projects extends React.Component{
    render(){
        return(
            <>
            <h1 className="projectsHead">PROJECTS</h1>
            
            {/* <div class="ui card">
                <div className="image">
                    <img src={ BrickGame} />
                </div>
                <div className="content">
                            <a className="header">Brick Breaker</a>
                            
                            <div className="description">
                                A simple Brick Breaker game that i created to get my feet wet
                                    with Javascript game development.
                                    It was a satisfying learning experience.     
                            </div>

                            <div className="extra">
                                TECHNOLOGIES :   
                                <div className="tech">Javascript</div> <div className="tech">p5*js</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti24.github.io/Brick-Breaker/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
            </div>

            <div class="ui card">
                <div className="image">
                    <img src={ Port} />
                </div>
                <div className="content">
                            <a className="header">Brick Breaker</a>
                            <div className="meta">
                                <span>Description</span>
                            </div>
                            <div className="description">
                                A simple Brick Breaker game that i created to get my feet wet
                                    with Javascript game development.
                                    It was a satisfying learning experience. 
                                
                            </div>
                            <div className="extra">
                                Additional Details
                            </div>
                </div>
            </div>

            <div class="ui card">
                <div className="image">
                    <img src={ScientificCalc} />
                </div>
                <div className="content">
                            <a className="header">Scientific Calculator</a>
                            
                            <div className="description">
                                
                            </div>
                            <br/>
                            <div className="extra">
                                TECHNOLOGIES :   
                                <div className="tech">REACT</div> <div className="tech">JAVASCRIPT</div>
                                <div className="tech">NODE.JS</div> <div className="tech">MONGODB</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti24.github.io/Brick-Breaker/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
            </div>

            
             */}

        <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="projectimg" src={ BrickGame} alt="First slide"/>
                    <div className="content">
                            <a className="header">Brick Breaker</a>
                            
                            <div className="description">
                                A simple Brick Breaker game that I created to get my feet wet
                                    with Javascript game development.
                                    It was a satisfying learning experience.     
                            </div>

                            <div className="extra">
                                Technologies:   
                                <div className="tech">Javascript</div> <div className="tech">p5*js</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti24.github.io/Brick-Breaker/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="projectimg" src={ScientificCalc} alt="Second slide"/>
                    <div className="content">
                            <a className="header">Scientific Calculator</a>
                            
                            <div className="description">
                            This scientific calculator can perform various operations like square root, factorial, power, MOD, sin, tan, cos and many more.
                            </div>
                            
                            <div className="extra">
                                Technologies:   
                                <div className="tech">HTML</div> <div className="tech">CSS</div>
                                <div className="tech">JavaScript</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti24.github.io/Scientific-Calculator/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="projectimg" src={Port} alt="Third slide"/>
                    <div className="content">
                            <a className="header">Portfolio</a>
                            
                            <div className="description">
                                A portfolio to showcase my skills and projects. It helped me in brushing my skills of Frontend and Backend.
                            </div>
                            <div className="extra">
                                Technologies:   
                                <div className="tech">React.js</div> <div className="tech">Express.js</div>
                                <div className="tech">Node.js</div> <div className="tech">MongoDB</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti-arora-portfolio.netlify.app/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
                </div>

                <div className="carousel-item">
                    <img className="projectimg" src={Game} alt="Forth slide"/>
                    <div className="content">
                            <a className="header">Game Street</a>
                            
                            <div className="description">
                                A  gaming website developed using HTML5, CSS3 and p5.Js which is a free and open-source Javascript library for creative coding
                            </div>
                            <div className="extra">
                                Technologies :   
                                <div className="tech">HTML</div> <div className="tech">JavaScript</div>
                                <div className="tech">CSS</div> <div className="tech">p5.js</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti24.github.io/Game-Street/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
                </div>

            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>

        </>
        )

    }
}



export default Projects;