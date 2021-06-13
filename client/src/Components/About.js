import React from 'react';

/* IMAGES */
import Logo from '../Images/aboutlogo.png';

const About = () => {
    return(
        <div className="about-main">
            <div className="about-container">
                <h1>My Team</h1><br/>
                <div className="content-left">
                    <div className="img">
                        <img src={Logo} alt="aboutlogo"/>
                    </div>
                    <div className="text">
                        <p>Name Name</p>
                    </div>
                </div>
                <div className="content-right">
                    <div className="img">
                        <img src={Logo} alt="aboutlogo"/>
                    </div>
                    <div className="text">
                        <p>Name Name</p>
                    </div>
                </div>
                <div className="content-left">
                    <div className="img">
                        <img src={Logo} alt="aboutlogo"/>
                    </div>
                    <div className="text">
                        <p>Name Name</p>
                    </div>
                </div>
                <div className="content-right">
                    <div className="img">
                        <img src={Logo} alt="aboutlogo"/>
                    </div>
                    <div className="text">
                        <p>Name Name</p>
                    </div>
                </div>
                <div className="content-left">
                    <div className="img">
                        <img src={Logo} alt="aboutlogo"/>
                    </div>
                    <div className="text">
                        <p>Name Name</p>
                    </div>
                </div>
                <div className="content-right">
                    <div className="img">
                        <img src={Logo} alt="aboutlogo"/>
                    </div>
                    <div className="text">
                        <p>Name Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;