import React from "react";
// import BG from '../portfoliobg.jpg';
import "../css/Homepage.css";


class Homepage extends React.Component{
 
   
    render(){

        
        return( 
            // <div className="bgImage" style={{ backgroundImage: `url(${BG})` }}>
            // <div className="container">
            //     <img className="bgImage" src={BG} />
            //     <div className="text">
            //         <h1 className="name">Drishti Arora</h1>
            //         <p className="desc">Full Stack web developer</p>
            //         <p>Web Developer with a passion for programming, solving problems and coming up with creative solutions.</p>
            //         <br />
            //         <br />
            //         <p className="bottom">
            //             Scroll to explore &#8595;
            //         </p>
            //     </div>
            // </div>
            <section className="cover-screen shadow" id="landing">
                <div className="mx-auto h-75 m-auto container text-center">

                    <div className="landing-text">DRISHTI ARORA</div>
                    <span className="highlight">Fullstack Web Developer</span>
                    <p className="landing-description">
                        Web Developer with a passion for programming, solving problems and coming up with creative solutions.
                    </p>

                    <div className="text-center">
                        <a href="#aboutme">
                            <button className="btn btn-primary">
                                Scroll to explore &#8595;
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default Homepage;