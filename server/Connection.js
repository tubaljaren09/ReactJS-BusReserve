const express = require ('express');
const mysql = require ('mysql');
const cors = require ('cors');

const app = express();

/* MIDDLEWARES */
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bus_reserve_db'
});

app.post("/register", (req, res) => {

    const lastName = req.body.lastName;
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const gender = req.body.gender;
    const age = req.body.age;
    const address = req.body.address;
    const contactNumber = req.body.contactNumber;
    const email = req.body.email;
    const q1 = req.body.q1;
    const q2 = req.body.q2;
    const q3 = req.body.q3;
    
    db.query(`INSERT INTO covid_tracing_form(lastName, firstName, middleName, gender, age, address, contactNumber, email, question1, question2, question3) 
    VALUES ('Tubal', '${firstName}', '${middleName}', '${gender}', '${age}', '${address}', '${contactNumber}', '${email}', '${q1}', '${q2}', '${q3}')`, (err, results) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log('Server is running...');
});