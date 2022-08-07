import React, {useState} from 'react';
import Axios from "axios";
import "../css/Form.css";

function Form(){
    const[Name, setName] = useState('');
    const[Email, setEmail] = useState('');
    const[Phone, setPhone] = useState('');
    const[Message, setMessage] = useState('');
    const[error, setError] = useState(false);

    const onSubmitClick = async (event) => {
        event.preventDefault();
        if(Name.length==0 || Email.length==0 || Phone.length==0 ||Message.length==0){
            setError(true);
        }
        if(Name && Email && Phone && Message){
            await Axios.post("https://portfolio-drishti.herokuapp.com/getInTouch", {
                fullName: Name,    
                email: Email,
                phoneNo: Phone,
                message: Message
            })
            .then(({data}) => {
                console.info(data);
                alert("Message sent! Thanks for responding.");
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.info("API call finished successfully");
            });
            
        }
        
    };

    return(
        <>
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
                        <input type="text" name="Name" value={Name}
                            onChange={e=>setName(e.target.value)}
                        />
                        </div>
                    </div>

                    {error && Name.length<=0 ? <label>Name required</label> : ""}

                    <div className="field">
                        <i aria-hidden="true" className="at icon"></i>Email:
                        <div className = "inputstyle">
                        <input type="email" name="Email" value={Email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                        </div>
                    </div>

                    {error && Email.length<=0? <label>Email required</label> : ""}

                    <div className="field">
                        <i aria-hidden="true" className="mobile alternate icon"></i>Phone No.:
                        <div className = "inputstyle">
                        <input type="tel" name="Phone" value={Phone}
                            onChange={e=>setPhone(e.target.value)}
                        />
                        </div>
                    </div>

                    {error && Phone.length<=0 ? <label>Phone no. required</label> : ""}

                    <div className="field">
                        <i aria-hidden="true" className="envelope icon"></i>Message:
                        <div className = "inputstyle">
                        <textarea rows="3" name="Message" value={Message}
                            onChange={e=>setMessage(e.target.value)}
                        />
                        </div>
                    </div>

                    {error && Message.length<=0 ? <label>Message required</label> : ""}
                    
                </div>
            <br />

            <div className='button'>
                <button onClick={onSubmitClick} className="submitButton">Send Message</button>
            </div>

            
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
        </>
    )
}

export default Form;