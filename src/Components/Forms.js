import React from "react";
import Axios from "axios";
import "../css/Form.css";

class Form extends React.Component{
    state = { user: {} };

    onSubmitClick = async (event) => {
        event.preventDefault();
        await Axios.post("https://portfolio-drishti.herokuapp.com/getInTouch", this.state.user)
        .then(({data}) => {
            console.info(data);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.info("API call finished successfully");
        });
    };

    render(){
        return(
            <div className="formcss">
            
            <h2>Thank you for scrolling so far!</h2>
            <h1 className="GIT">LET'S GET IN TOUCH</h1>
            <p className="GIT">Want to work together or have a question, 
                Feel free to reach out to my social channels or ping me using form below.
                I'll try my best to get back to you!
            </p>
            <form className="textArea" method="post"> 
                <div className="ui form">
                    <div className="field">
                        <i aria-hidden="true" className="user icon"></i>Full Name:
                        <div className = "inputstyle">
                        <input type="text" name="fullName" required
                            onChange={(e) => {
                                this.setState({
                                user: {
                                    ...this.state.user,
                                    fullName: e.target.value,
                                },
                                });
                            }}
                        />
                        </div>
                    </div>

                    <div className="field">
                        <i aria-hidden="true" className="at icon"></i>Email:
                        <div className = "inputstyle">
                        <input type="email" name="email" required
                            onChange={(e) => {
                                this.setState({
                                user: {
                                    ...this.state.user,
                                    email: e.target.value,
                                },
                                });
                            }}
                        />
                        </div>
                    </div>

                    <div className="field">
                        <i aria-hidden="true" className="mobile alternate icon"></i>Phone No.:
                        <div className = "inputstyle">
                        <input type="tel" name="phoneNo" required
                            onChange={(e) => {
                                this.setState({
                                user: {
                                    ...this.state.user,
                                    phoneNo: e.target.value,
                                },
                                });
                            }}
                        />
                        </div>
                    </div>

                    <div className="field">
                        <i aria-hidden="true" className="envelope icon"></i>Message:
                        <div className = "inputstyle">
                        <textarea rows="3" name="message"
                            onChange={(e) => {
                                this.setState({
                                user: {
                                    ...this.state.user,
                                    message: e.target.value,
                                },
                                });
                            }}
                        />
                        </div>
                    </div>
                </div>
            <br />

            <div className="">
                <button onClick={this.onSubmitClick}>Submit</button>
            </div>
          
                {/* <div className="ui right labeled button" role="button" tabIndex="0">
                    <button data-toggle="modal" data-target="#exampleModalCenter" className="ui icon button" type="submit" onClick={this.onSubmitClick}>
                    <i aria-hidden="true" className="paper plane icon"></i>  Send Message
                    </button>
                </div>

                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Message sent</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Thank you for responding!
                        </div>
                        
                        </div>
                    </div>
                </div> */}


                
            </form>
            <div className="footer">
                <a href="https://github.com/drishti24" target="_blank">
                    <i aria-hidden="true" className="huge github icon"></i>
                </a>
                            
                <a href="https://www.linkedin.com/in/drishti-arora-66baaa1a8/" target="_blank">
                    <i aria-hidden="true" className="huge linkedin icon"></i>
                </a>
            </div>
            
        </div>
        )
    }
}

export default Form;
