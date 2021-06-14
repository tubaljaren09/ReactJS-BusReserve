import React from 'react';

const Book = () => {
    return(
        <div className="book-main">
            <div className="book-container">
                <div className="greetings">
                    <h1>Covid-19 Tracing Form</h1>
                    <h2>PLEASE FILL OUT THE FORM COMPLETELY.</h2>
                </div>
                <form className="register-form">
                    <input type="text" name="lastName" placeholder="Last Name"/>
                    <input type="text" name="firstName" placeholder="First Name"/>
                    <input type="text" name="middleName" placeholder="Middle Name"/>
                    <div className="gender">
                        <p>Gender:</p>
                        <input type="radio" value="Male" name="gender" />Male
                        <input type="radio" value="Female" name="gender" />Female
                    </div>
                    <input type="text" name="age" placeholder="Age"/>
                    <input type="text" name="address" placeholder="Address"/>
                    <input type="text" name="contactNumber" placeholder="Contact Number"/>
                    <input type="text" name="email" placeholder="Email Address"/>
                    <div className="covid-form">
                        <div className="question">
                            <p>Have you traveled outside the country anytime from December 2019 'til now?</p>
                            <div className="q1">
                                <input type="radio" value="Yes" name="q1" />Yes
                                <input type="radio" value="No" name="q1" />No
                            </div>
                        </div>
                        <div className="question">
                            <p>Have you come into contact with anyone who has Covid-19?</p>
                            <div className="q1">
                                <input type="radio" value="Yes" name="q2" />Yes
                                <input type="radio" value="No" name="q2" />No
                            </div>
                        </div>
                        <div className="question">
                            <p>Are you currently experiencing any of the following conditions during this time? (Fever, Cough, Difficulty in breathing, Headache):</p>
                            <div className="q1">
                                <input type="radio" value="Yes" name="q3" />Yes
                                <input type="radio" value="No" name="q3" />No
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Book;