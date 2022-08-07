import React from "react";
import myimage from '../MyImage.jpg';
import "../css/AboutMe.css";

class AboutMe extends React.Component{
    render(){
        return(
            <div className="aboutMeBg">
                <h1 className="aboutMeHead">ABOUT ME</h1>
                <img className="ui medium left floated image" src={myimage} alt="Drishti Arora"/>
                <p className="aboutMeText">Hello, I am Drishti Arora, 
                currently pursuing BTech in Artificial Intelligence from JIET Group of Institutions.
                A passionate, diligent person who wants to learn continuously.
                I'm interested in Full Stack Development and Problem Solving. I am academic topper of my batch with an aggregate of 9.25 till IV Sem. I've solved dozens of problems over various coding platforms like HackerRank, CodeChef and Leetcode. I'm 5* on HackerRank and 3* on CodeChef.
            </p>
            </div>
        )
    }
}


export default AboutMe;