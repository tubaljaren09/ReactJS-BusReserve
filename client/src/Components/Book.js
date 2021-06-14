import React, {useState} from 'react';
import Axios from 'axios';

const Book = () => {

    const [state, setState] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        gender: '',
        age: '',
        address: '',
        contactNumber: '',
        email: '',
        q1: '',
        q2: '',
        q3: ''
    });

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            lastName: state.lastName,
            firstName: state.firstName,
            middleName: state.middleName,
            gender: state.gender,
            age: state.age,
            address: state.address,
            contactNumber: state.contactNumber,
            email: state.email,
            q1: state.q1,
            q2: state.q2,
            q3: state.q3
        }).then((response) => {
            console.log(response);
        });
    }

    return(
        <div className="book-main">
            <div className="book-container">
                <div className="greetings">
                    <h1>Covid-19 Tracing Form</h1>
                    <h2>PLEASE FILL OUT THE FORM COMPLETELY.</h2>
                </div>
                <form className="register-form">
                    <input type="text" name="lastName" placeholder="Last Name" value={state.lastName} onChange={handleOnChange}/>
                    <input type="text" name="firstName" placeholder="First Name" value={state.firstName} onChange={handleOnChange}/>
                    <input type="text" name="middleName" placeholder="Middle Name" value={state.middleName} onChange={handleOnChange}/>
                    <div className="gender">
                        <p>Gender:</p>
                        <input type="radio" value="Male" name="gender" onChange={handleOnChange}/>Male
                        <input type="radio" value="Female" name="gender" onChange={handleOnChange}/>Female
                    </div>
                    <input type="text" name="age" placeholder="Age" value={state.age} onChange={handleOnChange}/>
                    <input type="text" name="address" placeholder="Address" value={state.address} onChange={handleOnChange}/>
                    <input type="text" name="contactNumber" placeholder="Contact Number" value={state.contactNumber} onChange={handleOnChange}/>
                    <input type="text" name="email" placeholder="Email Address" value={state.email} onChange={handleOnChange}/>
                    <div className="covid-form">
                        <div className="question">
                            <p>Have you traveled outside the country anytime from December 2019 'til now?</p>
                            <div className="q1">
                                <input type="radio" value="Yes" name="q1" onChange={handleOnChange}/>Yes
                                <input type="radio" value="No" name="q1" onChange={handleOnChange}/>No
                            </div>
                        </div>
                        <div className="question">
                            <p>Have you come into contact with anyone who has Covid-19?</p>
                            <div className="q1">
                                <input type="radio" value="Yes" name="q2" onChange={handleOnChange}/>Yes
                                <input type="radio" value="No" name="q2" onChange={handleOnChange}/>No
                            </div>
                        </div>
                        <div className="question">
                            <p>Are you currently experiencing any of the following conditions during this time? (Fever, Cough, Difficulty in breathing, Headache):</p>
                            <div className="q1">
                                <input type="radio" value="Yes" name="q3" onChange={handleOnChange}/>Yes
                                <input type="radio" value="No" name="q3" onChange={handleOnChange}/>No
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button onClick={register}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Book;