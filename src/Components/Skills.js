import React from "react";
import "../css/Skills.css";
import C from '../C.png';
import Cpp from "../C++.jpg";
import Python from "../python.jpg";
import Node from "../node.png";
import Express from "../Express.png";
import MongoDB from "../mongodb.png";
import Reactjs from "../react.png";
import Html from "../html.png";
import Css from "../css.jpg";
import JS from "../JS.png";
import CC from "../codechef.png";
import CF from "../CF.png";
import HR from "../hackerrank.png";
import LC from "../LC.jpg";



class Skills extends React.Component{
    render(){
        return(
            <>
            <h1 className="skillsHead">Skills</h1>
            
            <div className="head">Frontend:
                <img src={Reactjs} className="logo" />
                <img src={Html} className="logo" style={{backgroundColor:"rgb(11, 194, 21)",
    borderRadius: "50%",
    width:"100px"}}/>
                <img src={Css} className="logo" />
                <img src={JS} className="logo" />
            </div>

            <div className="head">Backend:
                <img src={Node} className="logo" />
                <img src={Express} className="logo" />
            </div>

            <div className="head">Database:
                <img src={MongoDB} className="logo" />
            </div>  

            <div className="head">Programming languages:
                <img src={C} className="logo" />
                <img src={Cpp} className="logo" />
                <img src={Python} className="logo" />
            </div>

            <div className="head">Programming Profiles:
                <a href="https://www.codechef.com/users/drishti_arora" target="_blank">
                    <img src={CC} className="logo" />
                </a>
                <a href="https://codeforces.com/profile/drishti__arora" target="_blank">
                    <img src={CF} className="logo" />
                </a>
                <a href="https://www.hackerrank.com/drishti__arora" target="_blank">
                    <img src={HR} className="logo" style={{backgroundColor:"rgb(11, 194, 21)",
    borderRadius: "50%",
    width:"100px"}}/>
                </a> 
                <a href="https://leetcode.com/drishti24/" target="_blank">
                    <img src={LC} className="logo" />
                </a>               
            </div>

            </>
        )
    }
}

export default Skills;