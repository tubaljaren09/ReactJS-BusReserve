import React, {useState} from 'react';
import Axios from 'axios';

const Book = () => {

    const [isOpen, setIsOpen] = useState(false);
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
                <form className="register-form" onSubmit={register}>
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
                    {isOpen ? (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="closeBtn" onClick={() => setIsOpen(false)}>&times;</span>
                                <div className="form-greet">
                                    <h1>Ticket Details</h1>
                                    <h4>PLEASE FILL OUT THE FORM COMPLETELY.</h4>
                                </div>
                                <div className="content">
                                    <label>Route:</label>
                                    <select name="route" id="route">
                                        <option selected disabled>Select a route</option>
                                        <option value="Manila to Cebu">Manila - Cebu</option>
                                        <option value="Manila to Bicol">Manila - Bicol</option>
                                        <option value="Manila to Bataan">Manila - Bataan</option>
                                    </select>
                                </div>
                                <div className="content">
                                    <label>Bus:</label>
                                    <select name="bus" id="bus">
                                        <option selected disabled>Select a bus</option>
                                        <option value="Bus 1">Bus 1</option>
                                        <option value="Bus 2">Bus 2</option>
                                        <option value="Bus 3">Bus 3</option>
                                    </select>
                                </div>
                                <div className="content">
                                    <label>Departure Date And Time:</label>
                                    <input type="datetime-local" id="departure" name="departure"/>
                                </div>
                                <div class="content">
                                    <label>Ticket Price:</label>
                                    <label id="price"></label>
                                </div>
                                <input type="submit" id="submit-form" className="hidden" name="submit"/><br/>
                                <label className="submitBtn" for="submit-form" tabindex="0">Submit</label>
                            </div>
                        </div>
                    ) : null}
                </form>
                <div className="button">
                    <button onClick={() => setIsOpen(true)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Book;