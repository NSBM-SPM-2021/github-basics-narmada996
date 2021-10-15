const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

// const PORT = 3001;

//Database Connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "std_registration"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//View Book Details
app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM student_registration";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});
//Insert Book Details
app.post("/api/insert", (req, res) => {

    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Pno = req.body.Pno;
    const Gname = req.body.Gname;
    const Gno = req.body.Gno;
    const add = req.body.add;
    const email = req.body.email;
    const faculty = req.body.faculty;
    const degree = req.body.degree;

    const sqlInsert = "INSERT INTO student_registration (Fname,Lname,Pno,Gname,Gno,address,email,faculty,degree)VALUES(?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [Fname, Lname, Pno, Gname, Gno, add, email, faculty, degree], (err, result) => {
        console.log(result);
    });
});
//Delete Book Details
app.delete('/api/delete/:id', (req, res) => {
    const deletestudentid = req.params.id;
    const sqlDelete = "DELETE FROM student_registration WHERE id = ?";

    db.query(sqlDelete, deletestudentid, (err, result) => {
        if (err) console.log(err);
    });
});
//Update Book Details
app.put("/api/update", (req, res) => {
    const updateid = req.body.updateid;
    const updateFname = req.body.updateFname;
    const updateLname = req.body.updateLname;
    const updatePno = req.body.updatePno;
    const updateGname = req.body.updateGname;
    const updateGno = req.body.updateGno;
    const updateaddress = req.body.updateaddress;
    const updateemail = req.body.updateemail;
    const updatefaculty = req.body.updatefaculty;
    const updatedegree = req.body.updatedegree;

    var sqlUpdate = "UPDATE LOW_PRIORITY IGNORE student_registration SET Fname = ?, Lname = ?, Pno = ?, Gname = ?, Gno = ?, address = ?, email = ?, faculty = ?, degree = ? WHERE id = ?";
    console.log(sqlUpdate);
    db.query(sqlUpdate, [updateFname, updateLname, updatePno, updateGname, updateGno, updateaddress, updateemail, updatefaculty, updatedegree, updateid], (err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
});


//Server
app.listen(3001, () => {
    console.log("running on port 3001");
});

//Server
// app.listen(process.env.PORT || PORT, () => {
//     console.log(`running on port ${PORT}`);
// });